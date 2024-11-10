import Title from "../components/shared/Title"
import bg from '../assets/backdcotors.png'
import DoctorCard from "../components/DoctorCard"
import GetInTouch from "../components/GetInTouch"
import Bettwrnews from "../components/Bettwrnews"
import { useGetAllDoctorQuery } from "../apis/doctorApi"

const Doctors = () => {
  const { data } = useGetAllDoctorQuery();
  return (
    <div className="mt-[10%] md:mt-0">
      <Title title="Our Doctors" subtitle="Doctors" bg={bg} position="25%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 px-4 md:px-20 lg:px-44">
        {
          data?.data?.map((doctor) => (
            <DoctorCard name={doctor?.name} post={doctor?.department} image={doctor?.image} key={doctor?._id} id={doctor?._id} />
          ))
        }
      </div>

      <Bettwrnews />
      <GetInTouch />
    </div>
  )
}
export default Doctors