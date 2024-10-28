import AdminAvatar from "../components/AdminAvatar"

const Topbar = () => {
  return (
    <div className="h-[70px] max-w-full bg-white flex flex-row justify-between items-center shadow-md px-6">
      <div className="lg:w-1/3 ">
        <p className="font-[500] text-dark text-sm md:text-[16px]">Building a healthier community, one patient at a time. 👩🏻‍⚕️❤️‍🩹</p>
      </div>
      <div>
        <AdminAvatar />
      </div>
    </div >
  )
}
export default Topbar