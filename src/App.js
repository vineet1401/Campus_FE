import React, { lazy, useEffect, Suspense, useState } from "react";
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
import { getRoleFromToken } from "./app/rbacAuth";
import { getStudentById } from "./services/student.service";
import { useDispatch } from "react-redux";
import { showNotification } from "./redux/headerSlice";
import { setPersonalData, setEducation, setExperience } from "./redux/studentDetailSlice";
import { getAllEducation } from "./services/education.service";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAllExperiences } from "./services/experience.service";

// Importing pages
const Layout = lazy(() => import("./containers/Layout"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const StudentLogin = lazy(() => import("./pages/StudentLogin"));
const Page404 = lazy(() => import("./pages/404"));

// Initializing different libraries
initializeApp();
// Check for login and initialize axios
const token = checkAuth();
const role = getRoleFromToken();

function App() {
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    themeChange(false);
  }, []);

  const fetchData = async () => {
    if (role === "Student" && !dataFetched) {
      try {
        const [studentPersonal, educationData, experienceData] = await Promise.all([
          getStudentById(),
          getAllEducation(),
          getAllExperiences(),
        ]);

        if (studentPersonal.status) {
          dispatch(
            showNotification({
              message: `${studentPersonal.message}`,
              status: 1,
            })
          );
          dispatch(setPersonalData(studentPersonal.data));
        } else {
          dispatch(
            showNotification({
              message: `${studentPersonal.message}`,
              status: 0,
            })
          );
        }

        if (educationData.status) {
          dispatch(
            showNotification({
              message: `${educationData.message}`,
              status: 1,
            })
          );
          dispatch(setEducation(educationData.data));
        } else {
          dispatch(
            showNotification({
              message: `${educationData.message}`,
              status: 0,
            })
          );
        }

        if (experienceData.status) {
          dispatch(
            showNotification({
              message: `${experienceData.message}`,
              status: 1,
            })
          );
          dispatch(setExperience(experienceData.data));
        } else {
          dispatch(
            showNotification({
              message: `${experienceData.message}`,
              status: 0,
            })
          );
        }

        setDataFetched(true);
      } catch (error) {
        dispatch(
          showNotification({
            message: "Failed to fetch data",
            status: 0,
          })
        );
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"

      />
    </>
  );
}

export default App;
