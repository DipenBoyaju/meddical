import about from '../assets/aboutdoc.jfif'
import { FaCircle } from "react-icons/fa";

const SubAbout = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-5 px-4 md:px-20 lg:px-44 py-10">
      <div className="w-full md:w-2/5 overflow-hidden md:h-[80vh]">
        <img src={about} alt="" className='h-full object-cover object-left' style={{ objectPosition: '35% center' }} />
      </div>
      <div className="md:w-3/5 w-full">
        <div className="px-4">
          <p className="text-secondary tracking-widest font-worksans uppercase text-[20px] font-[700]">Welcome to hospital</p>
          <h2 className="text-primary font-yeseva md:text-[48px] text-3xl font-[500] py-1 leading-[50px]">Best care for your good health</h2>
          <div className="grid grid-cols-2 font-worksans gap-3 py-7 font-[500] text-dark">
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' />A Passion for Healing </span>
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' />5-Star Care </span>
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' />All our best </span>
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' /> Believe in Us</span>
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' />Always Caring </span>
            <span className='flex items-center text-lg gap-2'><FaCircle className='text-secondary' /> A Legacy of Excellence</span>
          </div>
          <div className="font-worksans font-[500] text-dark">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubAbout