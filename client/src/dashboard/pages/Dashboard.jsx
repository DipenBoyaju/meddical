import { MdArrowForwardIos } from "react-icons/md";
import WelcomeCard from "../components/WelcomeCard";
import DashboardCard from "../components/DashboardCard";
import { MdMedicalServices } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { useGetAllServiceQuery } from "../../apis/serviceApi";
import { useGetAllDoctorQuery } from "../../apis/doctorApi";
import { useGetAllDepartmentQuery } from "../../apis/departmentApi";
import { useGetAllAppointmentQuery } from "../../apis/appointmentApi";

const Dashboard = () => {
  const { data: service } = useGetAllServiceQuery()
  const { data: doctor } = useGetAllDoctorQuery()
  const { data: department } = useGetAllDepartmentQuery()
  const { data: appointments } = useGetAllAppointmentQuery()

  return (
    <div className="font-worksans pt-3">
      <div className="">
        <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Dashboard <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">Admin Dashboard</span></p>
      </div>
      <WelcomeCard />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
        <DashboardCard image={MdMedicalServices} title="Services" color={"bg-red-400"} number={service?.data?.length} />
        <DashboardCard image={FaUserDoctor} title="Doctors" color={"bg-blue-400"} number={doctor?.data?.length} />
        <DashboardCard image={FaBuildingUser} title="Departments" color={"bg-green-400"} number={department?.data?.length} />
        <DashboardCard image={FaClipboardList} title="Appointments" color={"bg-yellow-400"} subtext="Today" number={appointments?.data?.length} />
      </div>
    </div>
  )
}
export default Dashboard