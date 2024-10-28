import { MdArrowForwardIos } from "react-icons/md"
import { useGetAllAppointmentQuery } from "../../apis/appointmentApi"

const Appointments = () => {
  const { data } = useGetAllAppointmentQuery();
  console.log(data);

  const getRowColor = (appointmentDate) => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const appointmentDay = new Date(appointmentDate).setHours(0, 0, 0, 0);

    if (appointmentDay < currentDate) {
      return "bg-red-200";
    } else if (appointmentDay === currentDate) {
      return "bg-green-200";
    } else {
      return "bg-yellow-200";
    }
  };

  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Appointments <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">All Appointments</span></p>
        </div>
      </div>
      <div className="pt-6 overflow-x-auto">
        <div className="flex justify-end items-center gap-3 pb-2">
          <div className="flex gap-1 items-center">
            <div className="h-3 w-3 rounded-sm bg-yellow-200"></div>
            <p className="text-sm">Upcoming Appointments</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="h-3 w-3 rounded-sm bg-green-200"></div>
            <p className="text-sm">Today's Appointments</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="h-3 w-3 rounded-sm bg-red-200"></div>
            <p className="text-sm">Finished Appointments</p>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className=" bg-light text-center">
            <th className="pl-2 font-[500] py-3">id</th>
            <th className="px-1 font-[500] py-3">Patient Name</th>
            <th className="px-1 font-[500] py-3">Email</th>
            <th className="px-1 font-[500] py-3">Gender</th>
            <th className="px-1 font-[500] py-3">Contact</th>
            <th className="px-1 font-[500] py-3">Date</th>
            <th className="px-1 font-[500] py-3">Time</th>
            <th className="px-1 font-[500] py-3">Doctor</th>
            <th className="px-1 font-[500] py-3">Department</th>
          </thead>
          <tbody className="text-center">
            {[data?.data]?.length === 0 && (<h1 className="text-center absolute p-2">No data</h1>)}
            {data?.data &&
              [...data.data]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Copy and sort by createdAt date
                .map((appointment, index) => {
                  const rowColor = getRowColor(appointment?.appointmentDate);
                  return (
                    <tr className={`${rowColor}`} key={appointment._id}>
                      <td className="py-2">{index + 1}</td>
                      <td>{appointment?.name}</td>
                      <td>{appointment?.email}</td>
                      <td>{appointment?.gender}</td>
                      <td>+977-{appointment?.phone}</td>
                      <td>{new Date(appointment.appointmentDate).toISOString().split('T')[0]}</td>
                      <td>{appointment.time.slice(0, 5)} - {appointment.time.slice(6, 11)}</td>
                      <td>{appointment?.doctor}</td>
                      <td>{appointment?.department}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Appointments