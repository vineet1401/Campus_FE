import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";

import { studentLogin } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { showNotification } from "../../redux/headerSlice";

function StudentLogin() {
  const dispatch = useDispatch();

  const INITIAL_LOGIN_OBJ = {
    password: "",
    zprn: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.zprn.trim() === "")
      return setErrorMessage("ZPRN is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      const response = await studentLogin(loginObj.zprn, loginObj.password);
      if (response.status) {
        setLoginObj(INITIAL_LOGIN_OBJ);
        dispatch(setUserData(response.data));
        dispatch(
          showNotification({ message: `${response.message}`, status: 1 })
        );
        localStorage.setItem("token", response.data.token);
        window.location.href = "/app/welcome";
      } else {
        dispatch(
          showNotification({ message: `${response.message}`, status: 0 })
        );
      }
      setLoading(false);
      console.log(loginObj);
    }
  };

  const updateFormValue = ({ name, value }) => {
    setErrorMessage("");
    setLoginObj((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Student Login
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type="text"
                  defaultValue={loginObj.zprn}
                  containerStyle="mt-4"
                  labelTitle="ZPRN"
                  placeholder="ZPRN"
                  name="zprn"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type="password"
                  name="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  placeholder="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Login
              </button>

              {/* <div className='text-center mt-4'>Don't have an account yet? <Link to="/register"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div> */}
              <div className="text-center mt-4">
                Login as Admin?{" "}
                <Link to="/admin-login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Admin Login
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
