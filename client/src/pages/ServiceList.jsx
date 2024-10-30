import Title from "../components/shared/Title"
import bg from '../assets/pregnant-anemia-race-main.jfif'
import TrustedCare from "../components/TrustedCare"
import GetInTouch from "../components/GetInTouch"
import { useEffect, useState } from "react"
// import cardio from '../assets/cardiogram.png'
// import dnatest from '../assets/dnatest.png'
// import bloodbank from '../assets/bloodbank.png'
import checkup from '../assets/checkup.png'
import { useGetAllServiceQuery } from "../apis/serviceApi"
import SingleService from "../components/shared/SingleService"

const ServiceList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [serviceId, setServiceId] = useState('')
  const { data: allService } = useGetAllServiceQuery()

  const handleTabClick = (index, id) => {
    setActiveTab(index);
    setServiceId(id)
  };

  useEffect(() => {
    if (allService?.data?.length > 0) {
      setServiceId(allService?.data[0]?._id);
    }
  }, [allService]);

  return (
    <div>
      <Title title="Our Services" subtitle="Services" bg={bg} position="45%" />
      <div className="md:grid md:grid-cols-12  pt-16 font-worksans px-4 lg:px-44">

        <div className="md:col-span-2 grid md:block grid-cols-2 w-full grid-flow-row gridco border rounded-lg overflow-hidden h-fit">
          {
            allService?.data?.map((service, index) => (
              <div key={service._id}
                className={`cursor-pointer sm:col-span-1 py-7 px-4 text-center flex flex-col items-center transition-colors duration-300 ${activeTab === index ? 'bg-primary text-lighter font-medium' : 'text-dark hover:text-blue-500'}`}
                onClick={() => handleTabClick(index, service?._id)}
              >
                <img src={checkup} alt="" />
                <p className="font-worksans font-normal">{service?.title}</p>
              </div>
            ))
          }
        </div>
        <div className="col-span-10 md:py-4 pl-4 hidden md:block">
          <SingleService id={serviceId} />
        </div>
      </div>
      <TrustedCare />
      <GetInTouch />
    </div>
  )
}
export default ServiceList