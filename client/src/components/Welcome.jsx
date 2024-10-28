import { FaArrowRight } from "react-icons/fa6";
import welcome from '../assets/backdcotors.png'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center md:px-20 lg:px-44 pt-20">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Welcome to Meddical</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">A Great Place to Receive Care</h2>
        <p className="text-dark font-[500] font-worksans pt-3 pb-5 md:px-20 px-5 lg:px-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
        <div className="flex justify-center hover:scale-105 transition-all duration-500">
          <button className="text-secondary font-worksans flex flex-row gap-2 cursor-pointer items-center" onClick={() => nav('/aboutus')}>Learn more <FaArrowRight /></button>
        </div>
      </div>
      <div className="h-[40vh] overflow-hidden relative mt-16">
        <img src={welcome} alt="" className="w-full -mt-24" />
        <div className="w-full absolute bottom-0 left-0 z-20 flex flex-row">
          <div className="h-2 bg-light w-[16%]"></div>
          <div className="h-2 bg-primary w-[68%]"></div>
          <div className="h-2 bg-secondary w-[16%]"></div>
        </div>
      </div>
    </div>
  )
}
export default Welcome