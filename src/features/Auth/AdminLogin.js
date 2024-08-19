import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";

import { adminLogin } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { showNotification } from "../../redux/headerSlice";
import DotLoader from "../../components/Loader/DotLoader";

function AdminLogin() {

  const dispatch = useDispatch();
  const INITIAL_LOGIN_OBJ = {
    password: "",
    email: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = async(e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.email.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      const response = await adminLogin(loginObj.email, loginObj.password);
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
      console.log(loginObj)
      setLoginObj(INITIAL_LOGIN_OBJ)
    }
  };

  const updateFormValue = ({ name, value }) => {
    setLoginObj((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("")
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Admin Login
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
              <InputText
                  type="email"
                  defaultValue={loginObj.email}
                  containerStyle="mt-4"
                  labelTitle="Email"
                  placeholder="Email"
                  name="email"
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
{/* 
              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div> */}

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className=
                  "btn mt-2 w-full btn-primary"
                
              >
                {loading ? <DotLoader/> : "Login"}
              </button>

              <div className='text-center mt-4'>Login as Student? <Link to="/student-login"><span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Student Login</span></Link></div>

            </form>
          </div>
          <div className="">
            <LandingIntro />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
