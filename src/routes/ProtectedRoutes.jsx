import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CentralNavBar from "../components/CentralNavBar/CentralNavBar";
export const ProtectedRoutes = () => {
    const token = useSelector((state) => state.auth.token);
  console.log('ads', token);
  if (!token){
    return <div>Invalid Credentials Login Again</div>;
  }
  return <>
  <CentralNavBar/>
  <Outlet />
  </>;
};
