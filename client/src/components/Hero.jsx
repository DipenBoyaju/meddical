import { useNavigate } from 'react-router-dom'
import slider1 from '../assets/slider1.jfif'

const Hero = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Inline styling with background image */}
      <div
        className="responsive-bg w-full h-full"
        style={{
          backgroundImage: `url(${slider1})`,
          backgroundPosition: 'right',
          // backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="bg-gradient-to-r from-[#E5E4E8] via-[#E5E4E8] h-full w-[35vw]">
          <div className="absolute top-80 px-4 md:px-20 lg:px-44 flex flex-col gap-1">
            <p className='text-lg tracking-wider font-worksans font-bold uppercase text-secondary'>Caring for Life</p>
            <h2 className='text-3xl md:text-5xl font-yeseva text-primary font-[500] leading-tight'>Leading the Way<br />in Medical Excellence</h2>
            <div className="mt-8">
              <button className='cursor-pointer bg-light font-worksans font-semibold text-primary px-8 py-3 rounded-full hover:bg-primary transition-all duration-500 hover:text-light' onClick={() => nav('/services')}>Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero