import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useStore } from "effector-react";

import { userModel } from "entities/user";

const GamePage = React.lazy(() => import("./game"));
const AuthPage = React.lazy(() => import("./auth"));
const Error404Page = React.lazy(() => import("./error404"));

export const Routing = () => {
  const isAuth = useStore(userModel.$isAuth);

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="*" element={<Error404Page />} />
      <Route path="/auth" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
