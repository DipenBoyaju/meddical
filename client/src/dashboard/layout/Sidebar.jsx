import { NavLink } from "react-router-dom"
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineApartment } from "react-icons/ai";
import { CgList } from "react-icons/cg";
import { RiBloggerLine } from "react-icons/ri";

const Sidebar = () => {
  const linkStyle = ({ isActive }) => isActive ? 'bg-secondary p-3 px-5 text-lighter text-[18px] font-normal flex gap-2 items-center' : 'bg-transparent p-3 px-5 text-lighter text-[18px] font-light flex gap-2 items-center hover:bg-secondary transition-all duration-300';
  return (
    <div className="w-full bg-primary h-screen shadow-md">
      <div className="font-yeseva text-center p-4 py-8">
        <span className="text-light text-3xl font-yeseva md:block cursor-pointer" >MED<span className="text-secondary hidden md:inline">DICAL</span></span>
      </div>
      <div className="">
        <nav>
          <NavLink to="/dashboard" className={linkStyle} end><RiDashboardHorizontalFill className="text-2xl" /><span className="hidden md:block">Dashboard</span></NavLink>
          <NavLink to="/dashboard/doctors" className={linkStyle}><FaUserDoctor className="text-2xl" /><span className="hidden md:block">Doctors</span></NavLink>
          <NavLink to="/dashboard/services" className={linkStyle}><RiServiceLine className="text-2xl" /><span className="hidden md:block">Services</span></NavLink>
          <NavLink to="/dashboard/departments" className={linkStyle}><AiOutlineApartment className="text-2xl" /><span className="hidden md:block">Departments</span></NavLink>
          <NavLink to="/dashboard/appointments" className={linkStyle}><CgList className="text-2xl" /><span className="hidden md:block">Appointments</span></NavLink>
          <NavLink to="/dashboard/blogs" className={linkStyle}><RiBloggerLine className="text-2xl" /><span className="hidden md:block">Blogs</span></NavLink>
        </nav>
      </div>
    </div >
  )
}
export default Sidebar