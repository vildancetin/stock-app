# STOCK APP
- The application allows users to log in based on password and email validation and to log out of the system. Users can also manage inventory of products.

- New products and companies can be added, and sales or purchases can be made based on them.
### Technologies Used
- Formik
- Yup
- Redux
- Persist
- react-tremor
- react-toastify
- flowbite-react
- tailwind
## Login/Logout Operations

### Description
- For login validations, Formik and Yup libraries are utilized.
- Formik simplifies form management tasks, while Yup specifies a schema for form validation. Together, they validate and publish error messages.
- During login and registration, a POST request is made to the API, returning a "token" as a response. This token is stored globally for subsequent logins, enabling user recognition. Redux is employed to manage global data for user sessions.


```javascript
const initialState = {
  user: "",
  error: false,
  loading: false,
  token: "",
};
-----
--> When login is successful, user information and token details are stored globally.
loginSuccess:(state,{payload})=>{
        state.loading=false
        state.user=payload.user.username
        state.token=payload.token
    },
    registerSuccess:(state,{payload})=>{
      state.loading=false
      state.user=payload.data.username
      state.token=payload.token
    },
```
- For the login process, redirection is involved afterward, so these operations are written not as functions but as a "custom - hook."
- During the registration process, when sending a POST request to the API, a token information is returned within the response data. This token is stored in Redux along with dispatch actions.
```javascript
 const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successful");
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Login not successful");
    }
  };
  
  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successful");

      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Register not successful");
    }
  };
```
- In the logout process, to log out of the system, I need to send the token provided to me during login in the headers. Thus, when logout is successful, all states are updated and reset.
```javascript
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      navigate("/");
      toastSuccessNotify("Logout successful");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout not successful");
    }
  };
  ```
## Axios Configure
- In the project, since Axios is used for API requests, the structure is configured with Axios instance.
- The `axios.configure` function provides a general configuration for making HTTP requests using the Axios library.
- Separate Axios configurations are created for operations requiring a token and for operations to be performed with a base URL.
```javascript
const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return { axiosPublic, axiosWithToken };
};
```
## Refreshing
- To make my states persistent even when the page refreshes, I utilized the "redux-persist" library. In this process, the states are stored in local storage and are saved to the states when refreshing or updating the page, a process known as "rehydration." By default, the persist function saves the information in local storage, but this can be changed to session storage.
- Since I only wanted to store user information, I provided the authSlice file in the persistReducer function. If I wanted to store all states, I would have provided all files.
- As I added a new reducer to my store page, I provided my new reducer to the auth as well.
```javascript
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer
  },
  
```
- I encapsulated these functionalities in the App.
```javascript
function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}
```
## Get Stocks
- A custom hook that retrieves data from an API via a GET request based on the URL provided.
```javascript
  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      const newData = data.data;
      dispatch(getStocksSuccess({ url, newData }));
      toastSuccessNotify(`${url} information was received`)
      console.log(data.data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} information wasn't received`)
      console.log(error);
    }
  };
```
- In the stockSlice, I update the state based on the URL from the payload.
```javascript
    getStocksSuccess: (state, { payload }) => {
        state.loading=false
        state[payload.url]=payload.newData
    },
```
### Firms
- On the company page, company information is listed, and new company addition or editing operations regarding existing companies are performed. These details are stored in global states created under the name stockSlice.
```javascript
  useEffect(() => {
    getStocks("firms");
  }, []);
```
- When I want to delete company information, I send the ID along with the URL, perform the deletion operation based on this ID, and then send a GET request to retrieve updated data from the API. This updates my page accordingly.
```javascript
const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`${url}`);
      const newData = data.data;
      dispatch(getStocksSuccess({ url, newData }));
      toastSuccessNotify(`${url} information was received`)
      ---
      
      const deleteStock = async (url = "firms", id) => {
    try {
      await axiosWithToken.delete(`${url}/${id}`);
      getStocks(`${url}`);
      toastSuccessNotify("Delete is succesful")
```
### Firm Modal
- This modal will open both when adding a new company and when updating an existing one. If the user wants to edit, the info will be fetched from the API, including the _id field. Therefore, when the submit button is clicked, the update function will be triggered. However, if the user is entering new data, the info will be empty, and clicking submit will send a POST request, adding a new company.
```javascript
const postStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.post(`${url}`, info);
      getStocks(`${url}`);
      toastSuccessNotify(`${url} information updated`)
      
      const updateStock = async (url = "firms", info) => {
    try {
      await axiosWithToken.put(`${url}/${info._id}`,info);
      getStocks(`${url}`);
      toastSuccessNotify(`${url} information updated`)

```
- The same operations apply for purchase, brand, product, and sales as well.
### Products
- On the Product page, categories and brands are also called because they will be needed.
```javascript
  useEffect(() => {
    getStocks("products");
    getStocks("categories")
    getStocks("brands")
  }, []);
```
- Since the info contains the ID, when making a selection from the select box, we choose the name, but when saving it to the info, we save its ID.
```javascript
  const [info, setInfo] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });
  
  ---
   <Select
              id="categories"
              required
              name="categoryId"
              value={info.categoryId}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option value={category._id} name="categoryId">
                  {category.name}
                </option>
              ))}
            </Select>
```
### KPI
- KPI values are plotted on charts using the react-tremor library.
- There's a KPI table on the dashboard containing sales, purchases, and profit values, and the information for this table is stored in an object. This summary information is visible on the homepage.
```javascript
const kpiDatas = [
    {
      id: 1,
      name: "SALES",
      price: `${totalSales}`,
      icon: <MdAttachMoney className="w-[50px] h-40 text-yellow-300" />,
    },
    {
      id: 2,
      name: "PURCHASES",
      price: `${totalPurchases}`,
      icon: <MdOutlinePayment className="w-[50px] h-44 green" />,
    },
    {
      id: 3,
      name: "PROFIT",
      price: `${totalSales - totalPurchases}`,
      icon: <MdAddShoppingCart className="w-[50px] h-44 text-red-500" />,
    },
  ];
```
## Live
[Link](https://stock-appy.vercel.app/)
