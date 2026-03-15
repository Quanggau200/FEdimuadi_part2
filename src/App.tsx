import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./route";
import { Suspense, useEffect, useState } from "react";
import { Spin } from "antd";
import { useRefreshTokenMutation } from "./feature/auth/authApi";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "./feature/auth/authSlice";

const route = createBrowserRouter(routes());
function App() {
  const dispatch = useDispatch();
  const [isInit, setIsInit] = useState(true);
  const [refreshToken] = useRefreshTokenMutation();
  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await refreshToken().unwrap();
        dispatch(setCredentials({ token: res?.data?.access_token }));
      } catch (error) {
        dispatch(logout());
      } finally {
        setIsInit(false);
      }
    };
    initAuth();
  }, []);
  if (isInit) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <Suspense fallback={<Spin />}>
      <RouterProvider router={route} />
    </Suspense>
  );
}

export default App;
