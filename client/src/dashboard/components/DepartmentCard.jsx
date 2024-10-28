import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";
import DeleteDepartmentNotify from "./DeleteDepartmentNotify";
import EditDepartment from "./EditDepartment";
import { GoEye } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ department }) => {
  const [showDelete, setShowDelete] = useState(false)
  const [editDepartment, setEditDepartment] = useState(false)
  const nav = useNavigate()

  return (
    <div className="flex rounded-lg overflow-hidden shadow-md">
      <div className="h-32 w-4/12">
        <img src={department?.image} className="h-full w-full object-cover object-center" alt="" /></div>
      <div className="w-7/12 pl-3 pt-3 bg-light">
        <h5 className="text-primary font-[600] text-xl">{department?.name}</h5>
        <p><span className="font-[500]">Running Hours:</span> <br />{department?.operationTime?.timeSlots[0]?.[0]} - {department?.operationTime?.timeSlots[0]?.[1]}</p>
        <p className="font-[500] text-lg">Doctors - {department?.doctors?.length}</p>
      </div>
      <div className="w-1/12 h-full flex flex-col">
        <div className="h-1/3 bg-green-500 hover:bg-green-600 flex justify-center" onClick={() => setEditDepartment(true)}>
          <button className="text-white text-lg"><MdEdit /></button>
        </div>
        <div className="h-1/3 bg-primary hover:bg-blue-900 flex justify-center" onClick={() => nav(`/dashboard/departments/${department?._id}`)}>
          <button className="text-white text-lg"><GoEye /></button>
        </div>
        <div className="h-1/3 bg-red-500 flex justify-center hover:bg-red-600" onClick={() => setShowDelete(true)}>
          <button className="text-white text-lg"><RiDeleteBin3Line /></button>
        </div>
      </div>
      {
        editDepartment && <EditDepartment setEditDepartment={setEditDepartment} department={department} />
      }
      {
        showDelete && <DeleteDepartmentNotify department={department} setShowDelete={setShowDelete} />
      }
    </div>
  )
}
export default DepartmentCard