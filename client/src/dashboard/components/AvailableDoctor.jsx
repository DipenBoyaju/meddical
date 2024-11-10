const AvailableDoctor = ({ doctors }) => {
  return (
    <div>
      <h2 className="text-xl font-[500] font-worksans text-primary">Available Doctors</h2>
      <div className="mt-2 flex flex-col gap-3">
        {
          doctors?.data?.slice(0, 4).map((doctor) => (
            <div className="flex flex-row gap-5" key={doctor._id}>
              <div className="w-16 h-16 overflow-hidden rounded-md bg-white">
                <img src={doctor?.image} alt="" />
              </div>
              <div className="">
                <p className="text-dark font-[500] text-lg">{doctor.name}</p>
                <p>{doctor.department}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AvailableDoctor