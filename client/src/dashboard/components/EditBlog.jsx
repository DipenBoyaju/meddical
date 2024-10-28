import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { ColorRing } from "react-loader-spinner";
import { useEditBlogMutation } from "../../apis/blogApi";
import { toast } from "react-toastify";
import uploadFile from "../features/uploadFile";
import placeholderImage from '../../assets/placeholder.webp';

const EditBlog = ({ setEditBlog, blog }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    image: ''
  });
  const [previewImage, setPreviewImage] = useState(placeholderImage);

  const [updateBlog, { isLoading }] = useEditBlogMutation();

  useEffect(() => {
    if (blog) {
      setFormData(blog);
      setPreviewImage(blog.image || placeholderImage);
    }
  }, [blog]);

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
    const imageUrl = formData.image ? await uploadFile(formData.image) : blog.image;

    const updatedFormData = {
      ...formData,
      image: imageUrl.url || blog.image,
    };

    try {
      const response = await updateBlog({ id: blog._id, data: updatedFormData }).unwrap();
      if (response.success) {
        setEditBlog(false);
        toast.success(response.message, { position: "top-right" });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, { position: "top-right" });
    }
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full bg-light opacity-50 z-10"></div>

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[60vw] overflow-y-scroll max-h-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-lg font-[500]">Edit Blog</p>
          <RxCross2
            className="text-2xl hover:text-red-500 cursor-pointer"
            onClick={() => setEditBlog(false)}
          />
        </div>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 text-sm">Author Name</label>
                <input
                  type="text"
                  placeholder="Author Name"
                  name="author"
                  onChange={handleChange}
                  value={formData.author}
                  className="h-[45px] border p-3 rounded-sm w-full focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm">Category</label>
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  onChange={handleChange}
                  value={formData.category}
                  className="h-[45px] border p-3 rounded-sm w-full focus:outline-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Title</label>
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
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="h-32 border p-3 rounded-sm w-full focus:outline-primary"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Select Image</label>
              <label htmlFor="uploadImage" className="cursor-pointer">
                <div className="w-full h-56 rounded-lg overflow-hidden">
                  <img
                    src={previewImage}
                    className="w-full h-full object-cover object-center"
                    alt="Preview"
                  />
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
                {isLoading ? (
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="color-ring-loading"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />
                ) : (
                  <>Update Blog</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
