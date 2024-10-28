import { FaPlus } from "react-icons/fa"
import { MdArrowForwardIos } from "react-icons/md"
import DepartmentCard from "../components/DepartmentCard"
import { useState } from "react"
import AddDepartment from "../components/AddDepartment"
import { useGetAllDepartmentQuery } from "../../apis/departmentApi"

const Departments = () => {
  const [addDepartment, setAddDepartment] = useState(false)
  const { data, isLoading } = useGetAllDepartmentQuery()
  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Departments <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">All Departments</span></p>
        </div>
        <div className="">
          <button className="bg-primary text-lighter hover:bg-light hover:text-primary transition-all duration-300  p-2 px-4 rounded-sm flex items-center gap-2" onClick={() => setAddDepartment(true)} ><FaPlus />Add Department</button>
        </div>
      </div>
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data?.data?.map((department) => (
            <DepartmentCard key={department._id} department={department} />
          ))
        }
      </div>
      {
        addDepartment && <AddDepartment setAddDepartment={setAddDepartment} />
      }
    </div>
  )
}
export default Departments