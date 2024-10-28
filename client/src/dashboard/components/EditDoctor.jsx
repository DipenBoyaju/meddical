import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ColorRing } from 'react-loader-spinner';
import image from '../../assets/image.png';
import Select from 'react-select';
import { useGetAllDepartmentQuery } from "../../apis/departmentApi";
import { useEditDoctorMutation } from "../../apis/doctorApi";
import uploadFile from "../features/uploadFile";

const timeOptions = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
];

const EditDoctor = ({ setEditDoctor, doctor }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    joinDate: '',
    specialization: '',
    department: '',
    days: [],
    timeSlots: [['', '']],
    image: null
  });
  const [previewImage, setPreviewImage] = useState(image);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const [editDoctor, { isLoading }] = useEditDoctorMutation();
  const { data } = useGetAllDepartmentQuery();

  const departmentOptions = data?.data?.map(department => ({
    value: department.name,
    label: department.name
  }));

  useEffect(() => {
    if (doctor) {
      setFormData({
        name: doctor?.name || '',
        contact: doctor?.contact || '',
        joinDate: doctor?.joinDate.slice(0, 10) || '',
        specialization: doctor?.specialization || '',
        department: doctor?.department || '',
        days: doctor?.availability?.days || [],
        timeSlots: doctor?.availability?.timeSlots || [['', '']],
        image: null,
      });
      setPreviewImage(doctor?.image || image);
      setSelectedOption(doctor?.availability?.days?.map(day => ({ value: day, label: day })) || []);
      setSelectedDepartment(doctor?.department);
    }
  }, [doctor]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData(prev => ({
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
    const imageUrl = formData.image ? await uploadFile(formData.image) : doctor?.image;

    const updatedFormData = {
      ...formData,
      image: imageUrl.url || doctor?.image,
      department: selectedDepartment,
      days: selectedOption.map(option => option.value),
    };

    try {
      const response = await editDoctor({ id: doctor._id, data: updatedFormData }).unwrap();

      if (response.success) {
        console.log(response.message);
        setEditDoctor(false);
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log('Update error:', error);
      toast.error('Failed to update doctor', { position: "top-right" });
    }
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center backdrop-blur-sm items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-light opacity-50 backdrop-blur-sm z-10"></div>

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[80vw] lg:w-[35vw] md:w-[50vw] overflow-y-scroll max-h-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-[500]">Edit Doctor</p>
          <RxCross2
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setEditDoctor(false)}
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
                value={departmentOptions?.find(option => option.value === selectedDepartment)}
                onChange={(selectedOption) => setSelectedDepartment(selectedOption.value)}
                options={departmentOptions}
              />
            </div>

            <div>
              <label className="block text-gray-700">Available Days</label>
              <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={timeOptions}
                isMulti={true}
              />
            </div>

            <div>
              <label className="block text-gray-700">Time Slots</label>
              {formData?.timeSlots?.map((slot, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={slot[0]}
                    onChange={(e) => {
                      const updatedSlots = [...formData.timeSlots];
                      updatedSlots[index][0] = e.target.value;
                      setFormData(prev => ({ ...prev, timeSlots: updatedSlots }));
                    }}
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="time"
                    value={slot[1]}
                    onChange={(e) => {
                      const updatedSlots = [...formData.timeSlots];
                      updatedSlots[index][1] = e.target.value;
                      setFormData(prev => ({ ...prev, timeSlots: updatedSlots }));
                    }}
                    className="border rounded p-2"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveTimeSlot(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddTimeSlot}
                className="flex items-center text-gray-500 space-x-2"
              >
                <FaPlus />
                <span>Add Time Slot</span>
              </button>
            </div>

            <div>
              <label className="block text-gray-700 text-sm">Select Image</label>
              <label htmlFor="uploadImage" className="cursor-pointer">
                <div className="w-24 h-auto rounded-lg overflow-hidden">
                  <img src={previewImage} className="w-full h-full" alt="Preview" />
                </div>
                <input
                  type="file"
                  id="uploadImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className={`w-full p-2 text-white rounded ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                disabled={isLoading}
              >
                {isLoading ? <ColorRing visible={true} height="25" width="25" ariaLabel="blocks-loading" /> : 'Update Doctor'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDoctor;
