import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  if (!token){
    return <div>FOR NOW HERE</div>;
  }

  return <Outlet />;
};
