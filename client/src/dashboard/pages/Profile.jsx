import { useState } from "react"
import { MdArrowForwardIos } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useChangeImageMutation, useEditPasswordMutation } from "../../apis/adminApi"
import { TbPhotoEdit } from "react-icons/tb";
import uploadFile from "../features/uploadFile"
import { setAdmin } from "../../slice/adminSlice"

const Profile = () => {
  const { admin } = useSelector((state) => state.adminSlice)
  const dispatch = useDispatch()
  console.log(admin?._id);
  console.log(admin);


  const [password, setPassword] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const [editPassword] = useEditPasswordMutation()
  const [changeImage] = useChangeImageMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editPassword({ id: admin?._id, password })
      if (response.success === true) {
        setPassword('')
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
      });

    }
  }

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }

    const uploadPhoto = await uploadFile(file)

    try {
      const response = await changeImage({ id: admin?._id, image: uploadPhoto.url }).unwrap();

      if (response.success === true) {
        console.log(response.message);
        dispatch(setAdmin({ admin: response.admin, token: response.token }))
        toast(response.message, {
          position: "top-right"
        })
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'top-right'
      })
    }
  };

  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Profile <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">Admin</span></p>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-2/4 md:w-1/4 h-52 rounded-lg overflow-hidden relative bg-light cursor-pointer group">
            <div className="w-full h-full">
              <label htmlFor="uploadImage" className="absolute bg-primary rounded-full cursor-pointer text-white p-2 top-2 left-2 mx-auto hidden group-hover:block">
                <TbPhotoEdit className="text-2xl" />
                <input type="file" id="uploadImage" className="hidden" onChange={handleUploadPhoto} />
              </label>
              <img src={admin?.image || previewImage} alt="" className="h-full object-cover object-center w-full" /></div>
          </div>
          <div className="">
            <p className="font-[500] text-lg">Email: <span className="font-normal">{admin?.email}</span></p>
            <div className="">
              <h4 className="font-semibold text-primary text-lg mt-4">Change Password</h4>
              <form action="" onSubmit={handleSubmit}>
                <div className="">
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border h-[50px] rounded-md w-64 mt-2 p-2 focus:outline-primary" />
                </div>
                <button className="bg-green-400 text-lighter rounded-md mt-2 cursor-pointer hover:bg-green-500 p-2 px-5" type="submit">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile