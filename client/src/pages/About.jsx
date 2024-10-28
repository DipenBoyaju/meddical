import Title from "../components/shared/Title"
import bg from '../assets/backdcotors.png'
import GetInTouch from "../components/GetInTouch"
import TrustedCare from "../components/TrustedCare"
import Bettwrnews from "../components/Bettwrnews"
import SubAbout from "../components/SubAbout"
import Testimonials from "../components/Testimonials"

const About = () => {
  return (
    <div>
      <Title title="About us" subtitle="About" bg={bg} position="25%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <SubAbout />
      <Testimonials />
      <TrustedCare />
      <Bettwrnews />
      <GetInTouch />
    </div>
  )
}
export default About