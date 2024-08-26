import axios from "axios";

const checkAuth = () => {
  /* Getting token value stored in localstorage, if token is not present we will open login page 
     for all internal dashboard routes  */
  const TOKEN = localStorage.getItem("token");
  const PUBLIC_ROUTES = ["admin-login", "student-login", "register"];

  const isPublicPage = PUBLIC_ROUTES.some((r) => window.location.href.includes(r));

  if (!TOKEN && !isPublicPage) {
    window.location.href = "/student-login";
    return;
  } else {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

    axios.interceptors.request.use(
      (config) => {
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add("loading-indicator");
        return config;
      },
      (error) => Promise.reject(error)
    );

    axios.interceptors.response.use(
      (response) => {
        // UPDATE: Add this code to hide global loading indicator
        document.body.classList.remove("loading-indicator");
        return response;
      },
      (error) => {
        document.body.classList.remove("loading-indicator");
        return Promise.reject(error);
      }
    );
    return TOKEN;
  }
};

export default checkAuth;
