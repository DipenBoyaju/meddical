import dashboardbg from '../../assets/dashboardbg.webp'
import { useNavigate } from 'react-router-dom'

const WelcomeCard = () => {
  const nav = useNavigate();
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <div className="p-8 bg-gradient-to-r from-lighter via-light to-primary rounded-xl relative font-worksans mt-6">
      <div className="">
        <h2 className="font-[600] text-dark font-worksans text-2xl md:text-4xl">{getGreeting()}, Admin</h2>
        <p className='text-lg'>Have a nice day at work. Manage<br /> all the workload</p>
        <button className='bg-primary rounded-md p-3 px-6 text-lighter mt-7' onClick={() => nav('/dashboard/appointments')}>Check Appointments</button>
      </div>
      <div className="absolute w-[280px] md:w-[320px] right-0 md:right-20 bottom-0">
        <img src={dashboardbg} alt="" />
      </div>
    </div>
  )
}
export default WelcomeCard