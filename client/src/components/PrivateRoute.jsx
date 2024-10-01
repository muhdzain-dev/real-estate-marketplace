import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  // if current user exist then show the child which is outlet ( in my case Profile\) otherwise navigate to signin page
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
