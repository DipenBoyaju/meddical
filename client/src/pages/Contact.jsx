import Title from "../components/shared/Title"
import bg from '../assets/herodoctor.jfif'
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsClock } from "react-icons/bs";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Title title="Our Contacts" subtitle="Contact" bg={bg} position="25%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <div className="px-4 md:px-20 lg:px-44">
        <div className="pt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.518541228285!2d85.31660087371525!3d27.701271773148616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMindrisers%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1729488561605!5m2!1sen!2snp" className="border-0 w-full h-[400px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="py-16 flex flex-col md:flex-row justify-between gap-5">
          <div className="md:w-1/2">
            <div className="px-4">
              <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Get in touch</p>
              <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">Contact</h2>
            </div>
            <div className="pt-6">
              <ContactForm />
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <ContactCard title="Emergency" icon={FiPhoneCall} subinfo1='(237) 681-812-255' subinfo2='(237) 666-331-894' />
            <ContactCard title="Locations" icon={GrLocation} subinfo1='0123 Some place' subinfo2='9876 Some country' />
            <ContactCard title="Email" icon={RxEnvelopeClosed} subinfo1='fildineeesoe@gmil.com' subinfo2='myebstudios@gmail.com' />
            <ContactCard title="Working Hours" icon={BsClock} subinfo1='Mon-Sat 09:00-20:00' subinfo2='Sunday Emergency only' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact