import Title from "./Title"
import bg from '../../assets/backdcotors.png'
import { useParams } from "react-router-dom"
import { useGetDoctorByIdQuery } from "../../apis/doctorApi"

const SingleDoctorInfo = () => {
  const { id } = useParams()
  const { data } = useGetDoctorByIdQuery(id)
  const doctor = data?.data
  console.log(doctor);

  return (
    <div>
      <Title title="Our Doctors" subtitle="Doctors" bg={bg} position="25%" />
      <div className="md:px-20 px-4 lg:px-44 pt-16 grid grid-cols-1 md:grid-cols-5 gap-10 pb-14">
        <div className="md:col-span-2 rounded-xl overflow-hidden">
          <img src={doctor?.image} alt="" className="w-full" />
        </div>
        <div className="col-span-3">
          <p className="uppercase text-3xl font-bold text-primary">Dr. {doctor?.name}</p>
          <div className="space-y-3 pt-3">
            <div className="text-xl font-semibold">Speciality : <span className="font-normal">{doctor?.specialization}</span>
            </div>
            <div className="text-xl font-semibold">Department : <span className="font-normal">{doctor?.department}</span>
            </div>
            <div className="text-xl font-semibold">Expericence : <span className="font-normal">3 Years</span>
            </div>
            <div className="text-xl font-semibold">Contact : <span className="font-normal">{doctor?.contact}</span>
            </div>
          </div>
          <div className="space-y-1 pt-3">
            <h3 className="text-primary font-semibold text-xl">Doctor Available</h3>
            <div className=" space-y-1">
              <p className="font-[500] text-lg text-dark">Days</p>
              <div className="flex flex-row gap-2">
                {doctor?.availability?.days?.map((day, index) => (
                  <p key={index} className="text-sm rounded-md bg-light text-dark font-[500] p-2 px-4">{day}</p>
                ))}
              </div>
            </div>
            <div className=" space-y-1">
              <p className="font-[500] text-lg text-dark">Time</p>
              <div className="flex flex-row gap-2">
                {doctor?.availability?.timeSlots?.map((time, index) => (
                  <p key={index} className="text-sm rounded-md bg-light text-dark font-[500] p-2 px-4">{time?.[0]} - {time?.[1]}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleDoctorInfo