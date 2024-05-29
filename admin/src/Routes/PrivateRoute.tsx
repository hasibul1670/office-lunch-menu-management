/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: any;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const email = localStorage.getItem("email");
  const { pathname } = useLocation();

  if (!email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return <>{children}</>;
}
