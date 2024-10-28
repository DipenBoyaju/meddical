import { useParams } from "react-router-dom"
import { useGetDepartmentByIdQuery } from "../../apis/departmentApi"
import { MdArrowForwardIos } from "react-icons/md"
import { useGetAllDoctorQuery } from "../../apis/doctorApi"

const SingleDepartment = () => {
  const { id } = useParams()
  const { data } = useGetDepartmentByIdQuery(id)
  const { data: allDoctorsData } = useGetAllDoctorQuery();

  const doctorIds = data?.data?.doctors || [];
  console.log('docid', doctorIds);


  const filteredDoctors = allDoctorsData?.data?.filter(doctor =>
    doctorIds.includes(doctor?._id)
  ) || [];
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
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl text-primary font-[500] font-yeseva">{data?.data?.name}</h3>
          <p>{data?.data?.description}</p>
          <div className="pt-4 space-y-3 cursor-default">
            <h5 className="text-lg font-[500] underline underline-offset-4">Department Operation Time</h5>
            <div className="space-y-2">
              <h4 className="font-[500] text-dark text-lg">Days</h4>
              <div className="flex flex-row gap-2 flex-wrap">
                {
                  data?.data?.operationTime?.days?.map((day, index) => (
                    <p key={index} className="bg-zinc-300 w-fit p-2 rounded-md font-[500] px-4">{day}</p>
                  ))
                }
              </div>
            </div>
            <div className="space-y-2 cursor-default">
              <h4 className="font-[500] text-dark text-lg">Time</h4>
              <p className="bg-zinc-300 w-fit p-2 rounded-md font-[500] px-4">{data?.data?.operationTime?.timeSlots[0]?.[0]} - {data?.data?.operationTime?.timeSlots[0]?.[1]}</p>
            </div>
            <div className=" pt-2">
              <h5 className="text-lg font-[500] ">Doctors : <span className="bg-purple-400 p-1 px-2 rounded-md text-sm">{data?.data?.doctors?.length}</span></h5>
              <div className="flex flex-row gap-2 flex-wrap">
                {filteredDoctors.map(doctor => (
                  <p key={doctor._id} className="bg-zinc-300 w-fit p-2 rounded-md font-[500] px-4">{doctor.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ul className="space-y-1">

        </ul>
      </div>
    </div >
  )
}
export default SingleDepartment