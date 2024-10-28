import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import uploadFile from "../features/uploadFile";
import { ColorRing } from 'react-loader-spinner'
import { useAddDoctorMutation } from "../../apis/doctorApi";
import image from '../../assets/image.png';
import Select from 'react-select';
import { useGetAllDepartmentQuery } from "../../apis/departmentApi";

const timeOptions = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
];

const AddDoctor = ({ setAddDoctor }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    joinDate: '',
    specialization: '',
    department: '',
    days: [],
    timeSlots: [['', '']],
    image: ''
  });
  const [previewImage, setPreviewImage] = useState(image);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const [addDoctor, { isLoading }] = useAddDoctorMutation()
  const { data } = useGetAllDepartmentQuery()

  const departmentOptions = data?.data?.map(department => ({
    value: department.name,
    label: department.name
  }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleAddTimeSlot = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      timeSlots: [...prevFormData.timeSlots, ['', '']]
    }));
  };

  const handleRemoveTimeSlot = (index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      timeSlots: prevFormData.timeSlots.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadPhoto = await uploadFile(formData?.image)

    const updatedFormData = {
      ...formData,
      image: uploadPhoto.url,
      department: selectedDepartment,
      days: selectedOption.map(option => option.value),
    };

    try {
      const response = await addDoctor(updatedFormData).unwrap();

      if (response.success) {
        console.log(response.message);
        setAddDoctor(false);
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log('Registration error:', error);
    }
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center backdrop-blur-sm items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-light opacity-50 backdrop-blur-sm z-10"></div>

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[80vw] lg:w-[35vw] md:w-[50vw] overflow-y-scroll max-h-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-[500]">Add Doctor</p>
          <RxCross2
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setAddDoctor((prev) => !prev)}
          />
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Doctor Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Contact</label>
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Join Date</label>
              <input
                type="date"
                value={formData.joinDate}
                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Specialization</label>
              <input
                type="text"
                value={formData.specialization}
                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Select Department</label>
              <Select
                value={selectedDepartment}
                onChange={(selectedOption) => setSelectedDepartment(selectedOption.value)}
                options={departmentOptions}
              />
            </div>

            <div>
              <label className="block text-gray-700">Available Days</label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={timeOptions}
                isMulti={true}
              />

            </div>

            <div>
              <label className="block text-gray-700">Time Slots</label>
              {formData.timeSlots.map((slot, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={slot[0]}
                    onChange={(e) => {
                      const newSlots = [...formData.timeSlots];
                      newSlots[index][0] = e.target.value;
                      setFormData({ ...formData, timeSlots: newSlots });
                    }}
                    className="w-1/3 p-2 border rounded"
                  />
                  <span>to</span>
                  <input
                    type="time"
                    value={slot[1]}
                    onChange={(e) => {
                      const newSlots = [...formData.timeSlots];
                      newSlots[index][1] = e.target.value;
                      setFormData({ ...formData, timeSlots: newSlots });
                    }}
                    className="w-1/3 p-2 border rounded"
                  />
                  <button type="button" onClick={() => handleRemoveTimeSlot(index)} className="text-red-500 text-sm">
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddTimeSlot} className="mt-2 p-2 bg-gray-300 rounded text-sm">
                Add Time Slot
              </button>
            </div>

            <div>
              <label htmlFor="" className="block text-gray-700 text-sm">Select Image</label>
              <label htmlFor="uploadImage" className="cursor-pointer">
                <div className="w-24 h-auto rounded-lg overflow-hidden">
                  <img src={previewImage} className="w-full h-full" alt="" />
                </div>
                <input
                  type="file"
                  id="uploadImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary text-lighter w-full p-3 text-lg rounded-sm flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {
                  isLoading ?
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> :
                    <>
                      <FaPlus />
                      Add Doctor
                    </>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}
export default AddDoctor