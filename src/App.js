import React, { lazy, useEffect, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
import routes from "./routes";
import SuspenseContent from "./components/Loader/SuspenseLoader";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const StudentLogin = lazy(() => import("./pages/StudentLogin"));
const Page404 = lazy(() => import("./pages/404"));

// Initializing different libraries
initializeApp();
// Check for login and initialize axios
const token = checkAuth();

const fetchData = async () => {};

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {});

  return (
    <>
      <Router>
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/student-login" element={<StudentLogin />} />

            <Route
              path="*"
              element={
                <Navigate
                  to={token ? "/app/welcome" : "/admin-login"}
                  replace
                />
              }
            />

            {/* Place new routes over this */}
            <Route path="/app/*" element={<Layout />}>
              {routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    element={route.component}
                  />
                );
              })}

              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
