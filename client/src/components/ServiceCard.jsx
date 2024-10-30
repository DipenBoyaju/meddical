import { FaArrowRight } from "react-icons/fa6";
import bg from '../assets/pregnant-anemia-race-main.jfif';
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const nav = useNavigate();
  return (
    <div className="border hover:cursor-pointer rounded-md overflow-hidden flex flex-col h-full">
      <div className="h-64 relative transition-all duration-300 group">
        <div className="h-full w-full bg-primary opacity-80 hidden group-hover:block absolute left-0 right-0"></div>
        <img src={service?.image} alt="" className="h-full object-cover object-left w-full" />
      </div>
      <div className="font-worksans p-5 flex flex-col flex-grow">
        <h4 className="text-primary text-[26px] font-[600]">{service?.title}</h4>
        <p className="text-dark font-[500] flex-grow">{service?.description.slice(0, 100)}...</p>
        <div className="mt-8">
          <button className="text-secondary font-worksans flex flex-row gap-2 cursor-pointer items-center" onClick={() => nav('/service')}>
            Learn more <FaArrowRight className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
