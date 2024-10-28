import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="px-4 md:px-20 lg:px-44 py-16 bg-primary font-worksans text-lighter flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="">
          <h2 className="text-light uppercase font-yeseva text-4xl">meddical</h2>
          <p className="font-[300] text-xl pt-6">Leading the Way in Medical<br />
            Execellence, Trusted Care.</p>
        </div>
        <div className="">
          <p className="font-[500] text-lg">Important Links</p>
          <ul className="py-8 font-light">
            <li><Link>Appointment</Link></li>
            <li><Link>Doctors</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>About Us</Link></li>
          </ul>
        </div>
        <div className="">
          <p className="font-[500] text-lg">Important Links</p>
          <ul className="py-8 font-light">
            <li><Link>Call: (237) 681-812-255</Link></li>
            <li><Link>Email: fildineesoe@gmail.com</Link></li>
            <li><Link>Address: 0123 Some place</Link></li>
            <li><Link>Some country</Link></li>
          </ul>
        </div>
        <div className="">
          <p className="font-[500] text-lg">Newsletter</p>
          <div className="mt-8 flex justify-between items-center gap-2 bg-light rounded-[6px] overflow-hidden text-primary">
            <input type="text" placeholder="Enter you email address" className="px-3 h-[50px] focus:outline-none bg-transparent text-primary placeholder:text-primary" />
            <div className="pr-3">
              <RiSendPlaneFill className="text-2xl text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-light"></div>
      <div className="flex justify-between">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        <div className="flex flex-row gap-4">
          <div className="bg-light text-primary text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaLinkedinIn className="" />
          </div>
          <div className="bg-light text-primary text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaFacebookF className="" />
          </div>
          <div className="bg-light text-primary text-sm p-2 rounded-full cursor-pointer hover:bg-secondary">
            <FaInstagram className="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer