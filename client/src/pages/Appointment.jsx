import Title from "../components/shared/Title"
import bg from '../assets/doctor1.jpg'
import GetInTouch from "../components/GetInTouch"
import tel from '../assets/atel.png'
import { GoDash } from "react-icons/go";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = [
    { start: "9:00 AM", end: "7:00 PM" },
    { start: "9:00 AM", end: "7:00 PM" },
    { start: "9:00 AM", end: "7:00 PM" },
    { start: "9:00 AM", end: "7:00 PM" },
    { start: "9:00 AM", end: "7:00 PM" },
    { start: "9:00 AM", end: "4:00 PM" },
    { start: "", end: "Closed" }
  ];

  return (
    <div className="">
      <Title title="Book an Appointment" subtitle="Appointment" bg={bg} position="25%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <div className="pt-12 px-4 md:px-20 lg:px-44 flex flex-col md:flex-row justify-between gap-5">
        <div className="md:w-1/2">
          <h3 className="font-yeseva text-[32px] text-primary">Book an Appointment</h3>
          <p className="font-[500] font-worksans text-dark pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
          <div className=" mt-10">
            <AppointmentForm />
          </div>
        </div>
        <div className="md:w-1/2 bg-primary p-8 py-14 rounded-lg text-light">
          <h2 className="font-yeseva text-5xl text-center">Schedule hours</h2>
          <div className="overflow-x-auto font-worksans text-lighter pt-4 text-lg">
            <table className="table-auto w-full ">
              <tbody>
                {days.map((day, index) => (
                  <tr key={day}>
                    <td className="px-4 py-2">{day}</td>
                    <td className="px-4 py-2"><GoDash className="text-4xl" /></td>
                    <td className="px-4 py-2 ">{times[index].start} - {times[index].end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-light h-[1px] mx-auto my-8 w-[80%]"></div>
          <div className="font-[500] flex justify-center items-center gap-3 text-2xl">
            <div className="">
              <img src={tel} alt="" />
            </div>
            <div className="">
              <p className="text-lighter font-worksans">Emergency</p>
              <p>(237) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 px-4 md:px-20 lg:px-44">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.518541228285!2d85.31660087371525!3d27.701271773148616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMindrisers%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1729488561605!5m2!1sen!2snp" className="border-0 w-full h-[400px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <GetInTouch />
    </div>
  )
}
export default Appointment