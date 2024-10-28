import ContactCard from "./ContactCard"
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsClock } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-center md:px-20 lg:px-44 pt-20">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Get in touch</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">Contact</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-14">
        <ContactCard title="Emergency" icon={FiPhoneCall} subinfo1='(237) 681-812-255' subinfo2='(237) 666-331-894' />
        <ContactCard title="Locations" icon={GrLocation} subinfo1='0123 Some place' subinfo2='9876 Some country' />
        <ContactCard title="Email" icon={RxEnvelopeClosed} subinfo1='fildineeesoe@gmil.com' subinfo2='myebstudios@gmail.com' />
        <ContactCard title="Working Hours" icon={BsClock} subinfo1='Mon-Sat 09:00-20:00' subinfo2='Sunday Emergency only' />
      </div>
    </div>
  )
}
export default GetInTouch