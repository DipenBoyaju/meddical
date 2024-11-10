import { NavLink, useNavigate } from "react-router-dom"
import { LuSearch } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import SearchService from "./SearchService";

const Navbar = () => {
  const nav = useNavigate();
  const [showNav, setShowNav] = useState(false)
  const [searchShow, setSearchShow] = useState(false)
  const linkStyle = ({ isActive }) => isActive ? 'md:text-light text-primary font-semibold' : 'text-lighter';
  const [searchTitle, setSearchTitle] = useState('')

  const searchQuery = (e) => {
    setSearchTitle(e.target.value)
  }

  const closeNav = () => {
    setShowNav(false)
  }
  return (
    <div className="bg-primary px-4 md:px-20 lg:px-44 py-4 md:text-lighter text-primary font-worksans text-center text-2xl md:text-lg md:font-light flex flex-row justify-between items-center w-full md:relative fixed z-30">
      <div className="md:hidden sm:block">
        <span className="text-light text-3xl font-yeseva md:block cursor-pointer" onClick={() => nav('/')}>MED<span className="text-secondary">DICAL</span></span>
      </div>
      <nav
        className={`flex w-full h-screen md:h-auto md:w-auto md:bg-transparent bg-light absolute md:relative md:flex-row flex-col gap-5 z-30 md:gap-4 top-[68px] md:top-0 py-10 md:py-0 left-0 transform transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <NavLink to='/' onClick={closeNav} className={linkStyle}>Home</NavLink>
        <NavLink to='/aboutus' onClick={closeNav} className={linkStyle}>About us</NavLink>
        <NavLink to='/services' onClick={closeNav} className={linkStyle}>Services</NavLink>
        <NavLink to='/doctors' onClick={closeNav} className={linkStyle}>Doctors</NavLink>
        <NavLink to='/news' onClick={closeNav} className={linkStyle}>News</NavLink>
        <NavLink to='/contact' onClick={closeNav} className={linkStyle}>Contact</NavLink>
        <div className="">
          <button className="font-[500] bg-primary p-2 rounded-full px-8 text-[16px] text-light cursor-pointer hover:bg-secondary transition-all duration-500 hover:text-lighter md:hidden" onClick={() => nav('/appointment')}>Appointment</button>
        </div>
      </nav>
      <div className="flex flex-row items-center gap-5">
        <div className={`flex ${searchShow ? 'bg-white' : 'bg-transparent'} h-[40px] items-center pr-3 overflow-hidden rounded-full relative`}>
          {
            searchShow && <input type="text" value={searchTitle} name="search" onChange={searchQuery} className="h-full focus:outline-none pl-2 text-dark text-sm" placeholder="Serach Service" />
          }
          { }
          <LuSearch className="text-[27px] cursor-pointer text-light" onClick={() => setSearchShow(true)} />

        </div>
        {
          searchTitle && <SearchService searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
        }
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