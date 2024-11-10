import Bettwrnews from "../components/Bettwrnews"
import BookAppointment from "../components/BookAppointment"
import Features from "../components/Features"
import GetInTouch from "../components/GetInTouch"
import Hero from "../components/Hero"
import OurService from "../components/OurService"
import Specialities from "../components/Specialities"
import TrustedCare from "../components/TrustedCare"
import Welcome from "../components/Welcome"

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <Welcome />
      <OurService />
      <Specialities />
      <BookAppointment />
      <TrustedCare />
      <Bettwrnews />
      <GetInTouch />
    </div>
  )
}
export default Homepage