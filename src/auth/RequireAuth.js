import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getLoginUser } from "../features/useinfo/userInfoSlice";

function RequireAuth({ children }) {
  const user = useSelector(getLoginUser);
  console.log(user);
  const location = useLocation();


  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;