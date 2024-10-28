import { NavLink, useNavigate } from "react-router-dom"
import { LuSearch } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const nav = useNavigate();
  const [showNav, setShowNav] = useState(false)
  const linkStyle = ({ isActive }) => isActive ? 'md:text-light text-primary font-semibold' : 'text-lighter';
  return (
    <div className="bg-primary px-4 md:px-20 lg:px-44 py-4 md:text-lighter text-primary font-worksans text-center text-2xl md:text-lg md:font-light flex flex-row justify-between items-center w-full relative">
      <div className="md:hidden sm:block">
        <span className="text-light text-3xl font-yeseva md:block cursor-pointer" onClick={() => nav('/')}>MED<span className="text-secondary">DICAL</span></span>
      </div>
      <nav
        className={`flex w-full md:w-auto md:bg-transparent bg-light absolute md:relative md:flex-row flex-col gap-5 z-30 md:gap-4 top-[68px] md:top-0 py-10 md:py-0 left-0 transform transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <NavLink to='/' className={linkStyle}>Home</NavLink>
        <NavLink to='/aboutus' className={linkStyle}>About us</NavLink>
        <NavLink to='/services' className={linkStyle}>Services</NavLink>
        <NavLink to='/doctors' className={linkStyle}>Doctors</NavLink>
        <NavLink to='/news' className={linkStyle}>News</NavLink>
        <NavLink to='/contact' className={linkStyle}>Contact</NavLink>
        <div className="">
          <button className="font-[500] bg-primary p-2 rounded-full px-8 text-[16px] text-light cursor-pointer hover:bg-secondary transition-all duration-500 hover:text-lighter md:hidden" onClick={() => nav('/appointment')}>Appointment</button>
        </div>
      </nav>
      <div className="flex flex-row items-center gap-5">
        <div className="">
          <LuSearch className="text-[27px] cursor-pointer text-light" />
        </div>
        <div className="cursor-pointer md:hidden text-light" onClick={() => setShowNav((prev) => !prev)}>
          {
            showNav ? <RxCross2 className="text-4xl" /> : <IoMenu className="text-4xl" />
          }
        </div>
        <div className="">
          <button className="font-[500] bg-light p-2 rounded-full px-8 text-[16px] text-primary cursor-pointer hover:bg-secondary transition-all duration-500 hover:text-lighter hidden md:block" onClick={() => nav('/appointment')}>Appointment</button>
        </div>
      </div>
    </div>
  )
}
export default Navbar