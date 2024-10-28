import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import image from '../../assets/image.png';
import { useEditServiceMutation } from "../../apis/serviceApi";
import { toast } from "react-toastify";
import uploadFile from "../features/uploadFile";
import { ColorRing } from 'react-loader-spinner';

const EditService = ({ service, setEditService }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(image);
  const [editService, { isLoading }] = useEditServiceMutation();

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title,
        description: service.description,
        image: null,
      });
      setPreviewImage(service.image || image);
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    const imageUrl = formData.image ? await uploadFile(formData.image) : service.image;

    const updatedFormData = {
      ...formData,
      image: imageUrl.url || service.image,
    };

    try {
      const response = await editService({ id: service._id, data: updatedFormData }).unwrap();

      if (response.success) {
        console.log(response.message);
        setEditService(false);
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

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[80vw] md:w-[60vw] lg:w-[35vw]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-[500]">Edit Service</p>
          <RxCross2
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setEditService((prev) => !prev)}
          />
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-gray-700 text-sm">Service Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={formData.title}
                className="h-[45px] border p-3 rounded-sm w-full focus:outline-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                placeholder="Description"
                className="w-full h-32 border p-3 rounded-sm focus:outline-primary"
              ></textarea>
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
            <div>
              <button
                type="submit"
                className="bg-primary text-lighter w-full p-3 text-lg rounded-sm flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {
                  isLoading ? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                  ) : (
                    <>
                      <FaPlus />
                      Update Service
                    </>
                  )
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditService;
