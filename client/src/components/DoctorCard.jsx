import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const DoctorCard = ({ name, image, post }) => {
  return (
    <div className="rounded-lg overflow-hidden font-worksans">
      <div className="h-[350px] w-full overflow-hidden">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-1 text-center bg-light p-6">
        <p className="text-lg text-primary font-[500]">{name}</p>
        <p className="uppercase text-primary font-bold text-lg">{post}</p>
        <div className="flex justify-center flex-row gap-4">
          <div className="bg-primary text-light text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaLinkedinIn className="" />
          </div>
          <div className="bg-primary text-light text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaFacebookF className="" />
          </div>
          <div className="bg-primary text-light text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaInstagram className="" />
          </div>
        </div>
      </div>
      <div className=" bg-primary p-3 font-worksans capitalize cursor-pointer text-light hover:bg-secondary hover:text-lighter text-center transition-all duration-300 text-lg">view profile</div>
    </div>
  )
}
export default DoctorCard