const AppointmentCard = ({ title, icon, bgcolor, textcolor }) => {
  return (
    <div className={`px-5 py-6 w-72 rounded-md h-full ${bgcolor} ${textcolor} flex items-center justify-between`}>
      <div className="">{title}</div>
      <div className="">
        <img src={icon} alt="" />
      </div>
    </div>
  )
}
export default AppointmentCard