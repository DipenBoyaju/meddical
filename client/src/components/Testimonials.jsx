import bg from '../assets/about.jfif'
import icon from '../assets/anchor.png'

const Testimonials = () => {
  return (
    <div className="h-[70vh] w-full relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="h-full w-full left-0 top-0 absolute bg-primary opacity-65"></div>
      <div className="flex flex-col justify-center items-center text-center relative z-10 h-full gap-10 mx-auto">
        <img src={icon} alt="" />
        <p className='text-lighter w-[50vw] font-worksans text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.</p>
        <span className='h-[1px] w-64 bg-light'></span>
        <p className='text-nowrap text-xl text-lighter font-[400]'>John Doe</p>
      </div>
    </div>
  )
}
export default Testimonials