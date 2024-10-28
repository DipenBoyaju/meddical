import AppointmentCard from "./AppointmentCard"
import calender from '../assets/Calendar.png'
import team from '../assets/Team.png'
import cash from '../assets/Cash.png'

const Features = () => {
  return (
    <div className=" items-center justify-center gap-10 h-24 relative z-20 -mt-12 hidden md:flex">
      <AppointmentCard title="Book an Appointment" icon={calender} bgcolor='bg-primary' textcolor="text-lighter" />
      <AppointmentCard title="Book an Appointment" icon={team} bgcolor='bg-light' textcolor="text-primary" />
      <AppointmentCard title="Book an Appointment" icon={cash} bgcolor='bg-secondary' textcolor="text-lighter" />
    </div>
  )
}
export default Features