import { useParams } from "react-router-dom"
import { MdArrowForwardIos } from "react-icons/md"
import { useGetDoctorByIdQuery } from "../../apis/doctorApi"

const SingleDoctor = () => {
  const { id } = useParams()

  const { data } = useGetDoctorByIdQuery(id)
  console.log(data);

  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Department<MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">{data?.data?.name}</span></p>
        </div>
      </div>
      <div className="pt-4 gap-5 flex md:flex-row flex-col">
        <div className="w-1/2 md:w-1/3 rounded-lg overflow-hidden">
          <img src={data?.data?.image} alt="" className="h-full object-cover object-center" />
        </div>
        <div className="">
          <h3 className="text-3xl text-primary font-[500] font-yeseva underline underline-offset-4">{data?.data?.name}</h3>
          <div className="flex flex-row gap-2 pt-2">
            <p className="font-[600] text-lg">Speciality</p>
            <p>-</p>
            <p className="font-[500]">{data?.data?.specialization}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-[600] text-lg">Contact</p>
            <p>-</p>
            <p className="font-[500]">+977-{data?.data?.contact}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-[600] text-lg">Department</p>
            <p>-</p>
            <p className="font-[500]">{data?.data?.department}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-[600] text-lg">Join Date</p>
            <p>-</p>
            <p className="font-[500]">{data?.data?.joinDate.slice(0, 10)}</p>
          </div>
          <div className="pt-4 space-y-3 cursor-default">
            <h5 className="text-lg font-[500] underline underline-offset-4">Availability</h5>
            <div className="space-y-2">
              <h4 className="font-[500] text-dark text-lg">Days</h4>
              <div className="flex flex-row gap-2 flex-wrap">
                {
                  data?.data?.availability?.days?.map((day, index) => (
                    <p key={index} className="bg-zinc-300 w-fit p-2 rounded-md font-[500] px-4">{day}</p>
                  ))
                }
              </div>
            </div>
            <div className="space-y-2 cursor-default">
              <h4 className="font-[500] text-dark text-lg">Time</h4>
              <div className="flex flex-row gap-2 flex-wrap">
                {
                  data?.data?.availability?.timeSlots?.map((timeSlots, index) => (
                    <p key={index} className="bg-zinc-300 w-fit p-2 rounded-md font-[500] px-4">{timeSlots[0]} - {timeSlots[1]}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleDoctor
