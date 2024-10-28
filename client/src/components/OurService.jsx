import { useState } from "react";
import checkup from '../assets/checkup.png'
import cardio from '../assets/cardiogram.png'
import dnatest from '../assets/dnatest.png'
import bloodbank from '../assets/bloodbank.png'
import { useNavigate } from "react-router-dom";
import FreeCheckup from "./services/FreeCheckup";
import Cardio from "./services/Cardio";
import DnaTesting from "./services/DnaTesting";
import BloodBank from "./services/BloodBank";

const OurService = () => {
  const [activeTab, setActiveTab] = useState(0);
  const nav = useNavigate()
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="flex flex-col justify-center md:px-20 lg:px-44 pt-20">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Care you can believe in</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">Our Services</h2>
      </div>
      <div className="md:grid md:grid-cols-12  pt-16 font-worksans px-4">
        <div className="md:col-span-2 grid md:block grid-cols-2 w-full grid-flow-row gridco border rounded-lg overflow-hidden h-fit">
          <div
            className={`cursor-pointer sm:col-span-1 py-7 px-4 text-center flex flex-col items-center transition-colors duration-300 ${activeTab === 0 ? 'bg-primary text-lighter font-medium' : 'text-dark hover:text-blue-500'}`}
            onClick={() => handleTabClick(0)}
          >
            <img src={checkup} alt="" />
            <p className="font-worksans font-normal">Free Checkup</p>
          </div>
          <div
            className={`cursor-pointer py-7 px-4 text-center flex sm:col-span-1 flex-col items-center transition-colors duration-300 ${activeTab === 1 ? 'bg-primary text-lighter font-medium' : 'text-dark hover:text-blue-500'}`}
            onClick={() => handleTabClick(1)}
          >
            <img src={cardio} alt="" />
            <p className="font-worksans font-normal">Cardiogram</p>
          </div>
          <div
            className={`cursor-pointer py-7 px-4 text-center flex flex-col items-center transition-colors duration-300 ${activeTab === 2 ? 'bg-primary text-lighter font-medium' : 'text-dark hover:text-blue-500'}`}
            onClick={() => handleTabClick(2)}
          >
            <img src={dnatest} alt="" />
            <p className="font-worksans font-normal">Dna Testing</p>
          </div>
          <div
            className={`cursor-pointer py-7 px-4 text-center flex flex-col items-center transition-colors duration-300 ${activeTab === 3 ? 'bg-primary text-lighter font-medium' : 'text-dark hover:text-blue-500'}`}
            onClick={() => handleTabClick(3)}
          >
            <img src={bloodbank} alt="" />
            <p className="font-worksans font-normal">BloodBank</p>
          </div>
          <div className="text-center bg-primary text-light col-span-2 py-2 cursor-pointer" onClick={() => nav('/services')}>
            View All
          </div>
        </div>
        <div className="col-span-10 md:py-4 pl-4 hidden md:block">
          {activeTab === 0 && <FreeCheckup />}
          {activeTab === 1 && <Cardio />}
          {activeTab === 2 && <DnaTesting />}
          {activeTab === 3 && <BloodBank />}
        </div>
      </div>
    </div>
  )
}
export default OurService