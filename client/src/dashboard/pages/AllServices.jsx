import { FaPlus } from "react-icons/fa"
import { MdArrowForwardIos } from "react-icons/md"
import ServicesCard from "../components/ServicesCard"
import { useState } from "react"
import AddService from "../components/AddService"
import { useGetAllServiceQuery } from "../../apis/serviceApi"
import ServiceCardSkeleton from "../components/skeleton/ServiceCardSkeleton"

const AllServices = () => {
  const [addService, setAddService] = useState(false)
  const { data, isLoading } = useGetAllServiceQuery();

  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Services <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">All Services</span></p>
        </div>
        <div className="">
          <button className="bg-primary text-lighter hover:bg-light hover:text-primary transition-all duration-300  p-2 px-4 rounded-sm flex items-center gap-2" onClick={() => setAddService((prev) => !prev)}><FaPlus />Add Service</button>
        </div>
      </div>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
          data?.data?.map((service) => (
            <ServicesCard key={service._id} service={service} />
          ))
        }
        {isLoading && <>
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
          <ServiceCardSkeleton />
        </>}
      </div>
      {
        addService && <AddService setAddService={setAddService} />
      }
    </div>
  )
}
export default AllServices