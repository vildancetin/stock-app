import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store,{persistor} from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
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

export default App;
