import { useState } from "react"
import DeleteNotify from "./DeleteNotify"
import EditService from "./EditService"

const ServicesCard = ({ service }) => {
  const [showDelete, setShowDelete] = useState(false)
  const [editService, setEditService] = useState(false)

  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-md" >
      <div className="w-full h-56 overflow-hidden">
        <img src={service?.image} alt="" className="object-cover h-full object-center w-full" />
      </div>
      <div className="bg-white">
        <p className="p-2 font-normal">{service.title}</p>
        <div className="flex justify-between">
          <div className="w-1/2">
            <button className="bg-green-400 hover:bg-green-500 p-2 w-full" onClick={() => setEditService(true)}>Edit</button></div>
          <div className="w-1/2">
            <button className="bg-red-400 hover:bg-red-500 p-2 w-full" onClick={() => setShowDelete(true)}>Delete</button></div>
        </div>
      </div>
      {
        editService && <EditService setEditService={setEditService} service={service} />
      }
      {
        showDelete && <DeleteNotify setShowDelete={setShowDelete} serviceId={service._id} />
      }
    </div>
  )
}
export default ServicesCard