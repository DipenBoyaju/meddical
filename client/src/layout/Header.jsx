import { useNavigate } from "react-router-dom"
import HeaderCard from "../components/HeaderCard"
import Navbar from "../components/Navbar"
import tel from '../assets/tel.svg'
import marker from '../assets/marker.svg'
import clock from '../assets/clock.svg'

const Header = () => {
  const nav = useNavigate()
  return (
    <div className="flex flex-col bg-[#FCFEFE] w-full z-50">
      <div className="px-4 md:px-20 lg:px-44 py-5 md:flex justify-between flex-wrap items-center w-full hidden">
        <div className="">
          <span className="text-primary text-4xl font-yeseva hidden md:block cursor-pointer" onClick={() => nav('/')}>MED<span className="text-secondary">DICAL</span></span>
        </div>
        <div className="flex gap-6 justify-between flex-wrap sm:justify-center items-center">
          <HeaderCard title="emergency" info="(237) 681-812-255" icon={tel} />
          <HeaderCard title="work hour" info="09:00 - 20:00 Everyday" icon={clock} />
          <HeaderCard title="location" info="0123 Some Place" icon={marker} />
        </div>
      </div>
      <Navbar />
    </div>
  )
}
export default Header