import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAdmin } = useSelector((state) => state.adminSlice);
  return isAdmin ? <Outlet /> : <Navigate to={'/'} />
}
export default ProtectedRoute