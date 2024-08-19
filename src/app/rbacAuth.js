import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const getRoleFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    return user.role;
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
};

export const Admin = ({ children }) => {
  console.log("Admin portal");
  const role = getRoleFromToken();

  if (role === "Admin") {
    return children;
  }
  return <Navigate to="/app/404" replace />;
};

export const Student = ({ children }) => {
  console.log("Student portal");
  const role = getRoleFromToken();

  if (role === "Student") {
    return children;
  }
  return <Navigate to="/app/404" replace />;
};

export const Alumni = ({ children }) => {
  console.log("Alumni portal");
  const role = getRoleFromToken();

  if (role === "Alumni") {
    return children;
  }
  return <Navigate to="/app/404" replace />;
};
