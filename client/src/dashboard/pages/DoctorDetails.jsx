import { MdArrowForwardIos } from "react-icons/md"
import { FaPlus } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useState } from "react";
import AddDoctor from "../components/AddDoctor";
import EditDoctor from "../components/EditDoctor";
import { useGetAllDoctorQuery } from "../../apis/doctorApi";
import DeleteDoctorNotify from "../components/DeleteDoctorNotify";
import { GoEye } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {
  const nav = useNavigate()
  const [addDoctor, setAddDoctor] = useState(false)
  const [editDoctor, setEditDoctor] = useState(false)
  const [editingDoctor, setEditingDoctor] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const { data } = useGetAllDoctorQuery()

  const handleEdit = (doctor) => {
    setEditDoctor(true)
    setEditingDoctor(doctor); // Set the doctor to edit
  };

  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Doctors <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">All Doctors</span></p>
        </div>
        <div className="">
          <button className="bg-primary text-lighter hover:bg-light hover:text-primary transition-all duration-300  p-2 px-4 rounded-sm flex items-center gap-2" onClick={() => setAddDoctor((prev) => !prev)}><FaPlus />Add Doctor</button>
        </div>
      </div>
      <div className="pt-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead className=" bg-light text-center">
            <th className="pl-2 font-[500] py-3">id</th>
            <th className="px-1 font-[500] py-3">Profile</th>
            <th className="px-1 font-[500] py-3">Doctor Name</th>
            <th className="px-1 font-[500] py-3">Specialist</th>
            <th className="px-1 font-[500] py-3">Contact</th>
            <th className="px-1 font-[500] py-3">Join Date</th>
            <th className="px-1 font-[500] py-3">Department</th>
            <th className="px-1 font-[500] py-3">Action</th>
          </thead>
          <tbody className="text-center">
            {
              data?.data?.map((doctor, index) => (
                <tr className="" key={doctor._id}>
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2 flex justify-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img src={doctor?.image} alt="" className="object-cover object-center" />
                    </div>
                  </td>
                  <td>Dr. {doctor?.name}</td>
                  <td>{doctor?.specialization}</td>
                  <td>+977-{doctor?.contact}</td>
                  <td>{new Date(doctor.joinDate).toISOString().split('T')[0]}</td>
                  <td>{doctor?.department}</td>
                  <td>
                    <div className="flex items-center justify-center gap-1">
                      <div className="bg-green-400 text-lighter px-2 pt-1 rounded-md hover:bg-green-500 cursor-pointer" onClick={() => handleEdit(doctor)}>
                        <button className=""><BsPencilSquare /></button>
                      </div>
                      <div className="bg-primary text-lighter px-2 pt-1 rounded-md hover:bg-blue-900 cursor-pointer" onClick={() => nav(`/dashboard/doctors/${doctor?._id}`)}>
                        <button className=""><GoEye /></button>
                      </div>
                      <div className="bg-red-400 text-lighter px-2 pt-1 rounded-md hover:bg-red-500 cursor-pointer" onClick={() => setShowDelete(true)}>
                        <button className=""><RiDeleteBin3Line /></button>
                      </div>
                    </div>
                  </td>
                  {
                    showDelete && <DeleteDoctorNotify setShowDelete={setShowDelete} doctor={doctor} />
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {
        addDoctor && <AddDoctor setAddDoctor={setAddDoctor} />
      }
      {
        editDoctor && <EditDoctor setEditDoctor={setEditDoctor} doctor={editingDoctor} />
      }
    </div>
  )
}
export default DoctorDetails