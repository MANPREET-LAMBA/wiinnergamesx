import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  

  return isLoggedIn ? children : <Navigate to="/login" />;
}
