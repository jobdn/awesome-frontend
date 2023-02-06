import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./routesConfig";

export const AppRouter = () => {
  return (
    <React.Suspense fallback="Loading....">
      <Routes>
        {Object.values(routes).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </React.Suspense>
  );
};
