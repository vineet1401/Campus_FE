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
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/Register"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Page404 = lazy(() => import("./pages/404"));
const DriveDetails = lazy(() => import("./pages/DriveDetails"))
// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false);
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/documentation" element={<Documentation />} />
            
            {/* Place new routes over this */}
            <Route path="/app/*" element={<Layout />}>
            <Route path="drive-details/:id" element={<DriveDetails />} />
              {routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    element={<route.component />}
                  />
                );
              })}

              <Route path="*" element={<Page404 />} />
              
            </Route>

            <Route
              path="*"
              element={
                <Navigate to={token ? "/app/welcome" : "/login"} replace />
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
