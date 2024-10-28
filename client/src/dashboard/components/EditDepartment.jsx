import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import image from '../../assets/image.png';
import { toast } from "react-toastify";
import uploadFile from "../features/uploadFile";
import { ColorRing } from 'react-loader-spinner'
import { FaPlus } from "react-icons/fa";
import Select from 'react-select';
import { useGetAllDoctorQuery } from "../../apis/doctorApi";
import { useEditDepartmentMutation } from "../../apis/departmentApi";
const timeOptions = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
];

const EditDepartment = ({ setEditDepartment, department }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    days: [],
    timeSlots: [['', '']],
    doctors: [],
    image: null,
  });
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [previewImage, setPreviewImage] = useState(image);
  const [editDepartment, { isLoading }] = useEditDepartmentMutation();
  const { data } = useGetAllDoctorQuery()
  const doctorOptions = data?.data?.map(doctor => ({
    value: doctor._id,
    label: doctor.name + ' ' + `(${doctor.specialization})`
  }));

  useEffect(() => {
    if (department) {
      setFormData({
        name: department?.name || '',
        description: department?.description || '',
        days: department?.operationTime?.days || [],
        timeSlots: department?.operationTime?.timeSlots || [['', '']],
        doctors: department?.doctors || [],
        image: null,
      });
      setPreviewImage(department.image || image);

      setSelectedOption(
        department?.operationTime?.days?.map(day => ({ value: day, label: day })) || []
      );

      setSelectedDoctor(
        department?.doctors?.map(doctor => ({
          value: doctor?._id || '',
          label: doctor.name || 'Unknown'
        })) || []
      );
    }
  }, [department]);


  const handleDoctorChange = (newDoctors) => {
    const mergedDoctors = [
      ...new Map([...selectedDoctor, ...newDoctors].map(item => [item.value, item])).values()
    ];
    setSelectedDoctor(mergedDoctors);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = formData.image ? await uploadFile(formData.image) : department.image;

    const validDoctorIds = selectedDoctor
      .map(option => option.value)
      .filter(id => id);

    const updatedFormData = {
      ...formData,
      image: imageUrl.url || department?.image,
      days: selectedOption.map(option => option.value),
      doctors: validDoctorIds,
    };
    console.log("Updated days:", updatedFormData.days);
    console.log("Updated form data:", updatedFormData);

    try {
      const response = await editDepartment({ id: department._id, data: updatedFormData }).unwrap();

      if (response.success) {
        console.log(response.message);
        setEditDepartment(false);
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log('Update error:', error);
    }
  };


  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center backdrop-blur-sm items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-light opacity-50 backdrop-blur-sm z-10"></div>

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[80vw] md:w-[60vw] lg:w-[35vw] overflow-y-scroll max-h-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-[500]">Edit Department</p>
          <RxCross2
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setEditDepartment(false)}
          />
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm">Department Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
                className="h-[45px] border p-3 rounded w-full focus:outline-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                required
                className="w-full p-3 focus:outline-primary border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Operation Days</label>
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
              <label className="block text-gray-700">Select Doctors</label>
              <Select
                value={selectedDoctor}
                onChange={handleDoctorChange}
                options={doctorOptions}
                isMulti={true}
              />
            </div>

            <div>
              <label htmlFor="uploadImage" className="block text-gray-700 text-sm">Select Image</label>
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
                      Edit Department
                    </>
                }
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default EditDepartment;