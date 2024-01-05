import { Provider } from "react-redux";
import "./App.css";
import AuthProvider from "./provider/authProvider";
import MasterRouter from "./router/MasterRouter";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
function App() {
  const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
  return (
    <div>
      <Provider store={store}>
      <AuthProvider>
        <MasterRouter />
      </AuthProvider>
      </Provider>

    </div>
  );
}

export default App;
