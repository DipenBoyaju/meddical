import DoctorCard from "./DoctorCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGetAllDoctorQuery } from "../apis/doctorApi";

const TrustedCare = () => {
  const { data } = useGetAllDoctorQuery()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const doctors = data?.data || [];
  return (
    <div className="flex flex-col justify-center md:px-20 px-4 lg:px-44 pt-20">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Trusted Care</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">Our Doctors</h2>
      </div>
      <div className="pt-16">
        {doctors?.length > 0 &&
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            arrows={false}
            showDots={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
          >
            {
              doctors.map((doctor) => (
                <div style={{ margin: '0 15px 50px 0' }} key={doctor?._id}>
                  <DoctorCard name={doctor?.name} post={doctor?.department} image={doctor?.image} />
                </div>
              ))
            }
          </Carousel>
        }
      </div>
    </div>
  )
}
export default TrustedCare