import Title from "../components/shared/Title"
import bg from '../assets/doctornews.jfif'
import GetInTouch from "../components/GetInTouch"
import ServiceCard from "../components/ServiceCard"
import { useGetAllServiceQuery } from "../apis/serviceApi"

const Services = () => {
  const { data } = useGetAllServiceQuery()
  return (
    <div className="mt-[10%] md:mt-0">
      <Title title="Our Services" subtitle="Services" bg={bg} position="45%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <div className="px-4 md:px-20 lg:px-44 pt-14 grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
        {
          data?.data?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        }
      </div>
      <GetInTouch />
    </div>
  )
}
export default Services