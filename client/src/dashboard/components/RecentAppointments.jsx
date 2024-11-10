const RecentAppointments = ({ appointments }) => {

  return (
    <div className="w-full">
      <h2 className="text-xl font-[500] font-worksans text-primary">Recent Appointments</h2>
      <div className="">
        <table className="w-full text-left bg-zinc-100 mt-2">
          <thead className=" bg-light text-center">
            <th className="pl-2 font-[500] py-3">id</th>
            <th className="px-1 font-[500] py-3">Patient Name</th>
            <th className="px-1 font-[500] py-3">Date</th>
            <th className="px-1 font-[500] py-3">Time</th>
            <th className="px-1 font-[500] py-3">Doctor</th>
            <th className="px-1 font-[500] py-3">Department</th>
          </thead>
          <tbody className="text-center">
            {[appointments?.data]?.length === 0 && (<h1 className="text-center absolute p-2">No data</h1>)}
            {appointments?.data &&
              [...appointments.data]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((appointment, index) => {
                  (appointment?.appointmentDate);
                  return (
                    <tr key={appointment._id}>
                      <td className="py-2">{index + 1}</td>
                      <td>{appointment?.name}</td>
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
export default RecentAppointments