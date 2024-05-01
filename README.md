# STOCK APP
## Login/Logout Operations

### Description
- For login validations, Formik and Yup libraries are utilized.
- Formik simplifies form management tasks, while Yup specifies a schema for form validation. Together, they validate and publish error messages.
- During login and registration, a POST request is made to the API, returning a "token" as a response. This token is stored globally for subsequent logins, enabling user recognition. Redux is employed to manage global data for user sessions.

### Technologies Used
- Formik
- Yup
- Redux
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
