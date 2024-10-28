import bg from '../assets/herodoctor.jfif'
import AppointmentForm from './AppointmentForm'

const BookAppointment = () => {
  return (
    <div className="px-4 py-10 md:px-20 lg:px-44 h-[90vh] flex flex-col md:flex-row gap-5 justify-between items-center w-full relative "
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
      <div className="w-full h-full bg-white absolute top-0 left-0 opacity-80"></div>
      <div className="transform md:w-1/2">
        <h3 className='text-secondary text-3xl font-yeseva'>Book an Appointment</h3>
        <p className='font-worksans font-[500] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
      </div>
      <div className="z-10 md:w-1/2">
        <AppointmentForm />
      </div>
    </div>
  )
}
export default BookAppointment