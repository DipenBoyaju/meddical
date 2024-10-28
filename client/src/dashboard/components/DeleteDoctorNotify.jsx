import { toast } from "react-toastify";
import { useDeleteDoctorMutation } from "../../apis/doctorApi";

const DeleteDoctorNotify = ({ setShowDelete, doctor }) => {
  const [deleteDepartment] = useDeleteDoctorMutation()
  const handleDelete = async () => {
    try {
      const response = await deleteDepartment(doctor?._id).unwrap();

      if (response.success) {
        console.log(response.message);
        setShowDelete(false);
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log('Registration error:', error);
      toast.error(response.message, {
        position: "top-right",
      });
    }
  }
  return (
    <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center backdrop-blur-sm items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-light opacity-50 backdrop-blur-sm z-10"></div>

      <div className="bg-white z-30 px-10 py-8 rounded-lg w-[80vw] md:w-[60vw] lg:w-[30vw]">
        <h1 className="font-[500] text-xl">Delete Doctor Detail</h1>
        <p className="text-zinc-500 text-sm">Are you sure you want to delete detail of <span className="text-dark font-[500] text-[16px]">{doctor?.name}</span></p>
        <div className="flex flex-row justify-end gap-3 pt-6">
          <div className="">
            <button className="bg-red-500 hover:bg-red-600 p-2 px-5 rounded-md text-white" onClick={handleDelete}>Delete</button>
          </div>
          <div className="">
            <button className="bg-zinc-200 hover:bg-zinc-300 p-2 px-5 rounded-md" onClick={() => setShowDelete(false)}>Cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default DeleteDoctorNotify