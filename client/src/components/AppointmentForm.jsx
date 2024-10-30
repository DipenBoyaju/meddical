import { useState } from 'react';
import arrow from '../assets/arrowdown.png'
import { useGetAllDepartmentQuery, useGetDepartmentByIdQuery } from '../apis/departmentApi';
import { useGetAllDoctorQuery, useGetDoctorByIdQuery } from '../apis/doctorApi';
import { toast } from 'react-toastify';
import { useBookAppointmentMutation } from '../apis/appointmentApi';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    phone: '',
    appointmentDate: '',
    time: '',
    department: '',
    doctor: '',
    description: ''
  })
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const { data: departmentOption } = useGetAllDepartmentQuery();
  const departmentOptions = departmentOption?.data;
  const { data: doctor } = useGetDepartmentByIdQuery(selectedDepartmentId, {
    skip: !selectedDepartmentId,
  })
  const { data: allDoctorsData } = useGetAllDoctorQuery()

  const doctorIds = doctor?.data?.doctors || [];

  const filteredDoctors = allDoctorsData?.data?.filter(doctor =>
    doctorIds.includes(doctor._id)
  ) || [];

  const { data: doctorDetails } = useGetDoctorByIdQuery(selectedDoctorId, {
    skip: !selectedDoctorId,
  });

  const doctorTime = doctorDetails?.data?.availability?.timeSlots

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    const departmentName = departmentOptions.find(dep => dep._id === departmentId)?.name;

    setSelectedDepartmentId(departmentId);
    setFormData((prev) => ({
      ...prev,
      department: departmentName
    }));
  };

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;

    const doctorName = filteredDoctors.find(doc => doc._id === doctorId)?.name;

    setSelectedDoctorId(doctorId);
    setFormData((prev) => ({
      ...prev,
      doctor: doctorName
    }));
  };

  const allOptions = document.querySelectorAll("option");
  allOptions.forEach(option => {
    option.classList.add("text-dark");
  });

  const [bookAppointment, { isLoading }] = useBookAppointmentMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await bookAppointment(formData).unwrap();

      if (response.success) {
        console.log(response.message);
        setFormData({
          name: '',
          email: '',
          gender: '',
          phone: '',
          appointmentDate: '',
          time: '',
          department: '',
          doctor: '',
          description: ''
        })
        setSelectedDepartmentId('')
        setSelectedDoctorId('')
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.success(error.message, {
        position: "top-right",
      });
    }
  }

  return (
    <div className="bg-primary rounded-lg overflow-hidden text-light">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between w-full border-b">
          <div className="w-1/2">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] h-[50px] border-r focus:outline-none" required />
          </div>
          <div className="w-1/2">
            <select name="gender" defaultValue="" id="" value={formData.gender} onChange={handleChange} className="w-full bg-transparent focus:outline-none placeholder:text-lighter p-4 font-[300] h-[50px] pr-8 appearance-none" style={{
              backgroundImage:
                `url(${arrow})`,
              backgroundPosition: 'right 16px center',
              backgroundSize: '12px',
              backgroundRepeat: 'no-repeat',
            }} required>
              <option value="" disabled>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="w-1/2">
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] h-[50px] border-b border-r focus:outline-none" required />
          </div>
          <div className="w-1/2">
            <input type="tel" name="phone" minLength={10} maxLength={10} placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent focus:outline-none placeholder:text-lighter p-4 font-[300] h-[50px] border-b" required />
          </div>
        </div>
        <div className="flex justify-between w-full border-b">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] h-[50px] border-r focus:outline-none pr-8 appearance-none"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              min={new Date().toISOString().split("T")[0]}
              style={{
                backgroundImage: `url(${arrow})`,
                backgroundPosition: "right 16px center",
                backgroundSize: "12px",
                backgroundRepeat: "no-repeat",
              }} required />
          </div>
          <div className="w-1/2">
            <select name="department" defaultValue="" value={selectedDepartmentId || ''}
              onChange={handleDepartmentChange} className="w-full bg-transparent focus:outline-none placeholder:text-lighter pr-8 appearance-none p-4 font-[300] h-[50px] " style={{
                backgroundImage:
                  `url(${arrow})`,
                backgroundPosition: 'right 16px center',
                backgroundSize: '12px',
                backgroundRepeat: 'no-repeat',
              }} required>
              <option value="" disabled>Department</option>
              {departmentOptions?.length > 0 && departmentOptions.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between w-full border-b">
          <div className="w-1/2">
            <select name="doctor" defaultValue="" id="" value={selectedDoctorId || ''} onChange={handleDoctorChange} className="w-full bg-transparent focus:outline-none placeholder:text-lighter border-r p-4 font-[300] h-[50px] pr-8 appearance-none" style={{
              backgroundImage:
                `url(${arrow})`,
              backgroundPosition: 'right 16px center',
              backgroundSize: '12px',
              backgroundRepeat: 'no-repeat',
            }} required>
              <option value="" disabled>Doctor</option>
              {filteredDoctors?.map((doctor, index) => (
                <option key={index} value={doctor._id}>
                  {doctor?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2">
            <select name="time" id="" defaultValue="" value={formData.time} onChange={handleChange} className="w-full bg-transparent focus:outline-none placeholder:text-lighter p-4 font-[300] h-[50px] pr-8 appearance-none" style={{
              backgroundImage:
                `url(${arrow})`,
              backgroundPosition: 'right 16px center',
              backgroundSize: '12px',
              backgroundRepeat: 'no-repeat',
            }} required>
              <option value="" disabled>Time</option>
              {
                doctorTime?.map((time, index) => (
                  <option value={time} key={index}>{time[0]} - {time[1]}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="">
          <textarea name="description" id="" placeholder="Message" value={formData.description} onChange={handleChange} className="w-full bg-transparent placeholder:text-lighter p-4 font-[300] focus:outline-none h-[200px]"></textarea>
        </div>
        <button type='submit' disabled={isLoading} className="bg-light w-full text-lg font-[500] uppercase p-3 hover:bg-secondary hover:text-lighter transition-all duration-300 text-primary"> {isLoading ? 'Booking Appointment' : 'Submit'}</button>
      </form>
    </div>
  )
}
export default AppointmentForm