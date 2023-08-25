import { configureStore } from "@reduxjs/toolkit";
import loginReducer from ".././Slices/loginSlice";
import { setAccessToken } from ".././Slices/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

const tokenFromLocalStorage = localStorage.getItem("accessToken");
if (tokenFromLocalStorage) {
  store.dispatch(setAccessToken(tokenFromLocalStorage));
}

export default store;
