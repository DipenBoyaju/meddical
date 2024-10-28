import { useState } from "react"
import { IoLogOutOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAdminLogoutMutation } from "../../apis/adminApi";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../slice/adminSlice";


const ProfileMenu = ({ setOpenMenu }) => {
  const [logout] = useAdminLogoutMutation()
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      if (response.success === true) {
        dispatch(logoutAdmin())
        nav('/admin')
        toast.success(response.message, {
          position: "top-right",
        });
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
      });
    }
  }
  return (
    <div className="absolute bg-lighter border right-0 top-14 z-30 shadow-sm">
      <div className=" p-2 px-5 hover:bg-secondary" onClick={() => {
        nav('/dashboard/profile')
        setOpenMenu(false)
      }}>
        <p className="flex items-center gap-4 hover:text-white"><PiUserCircleLight />Profile</p>
      </div>
      <div className=" p-2 px-5 hover:bg-secondary hover:text-white" onClick={handleLogout}>
        <p className="flex items-center gap-4"><IoLogOutOutline />Logout</p>
      </div>
    </div>
  )
}

const AdminAvatar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { admin } = useSelector((state) => state.adminSlice)

  return (
    <div className="flex items-center gap-2 cursor-pointer relative">
      <div className="text-right">
        <h5 className="font-[500] leading-none text-lg text-primary">{admin?.name}</h5>
        <p className="text-sm text-zinc-400">Admin</p>
      </div>
      <div className="h-12 w-12 bg-dark rounded-full overflow-hidden" onClick={() => setOpenMenu((prev) => !prev)}>
        <img src={admin?.image} alt="" className="h-full w-full object-cover" />
      </div>
      {
        openMenu && <ProfileMenu setOpenMenu={setOpenMenu} />
      }
    </div>
  )
}
export default AdminAvatar