const DashboardCard = ({ image: Icon, title, color, number, subtext }) => {
  return (
    <div className={`shadow-lg rounded-lg overflow-hidden ${color} flex flex-row gap-4 p-5 items-center`}>
      <div className="">
        <Icon className="text-5xl text-lighter" />
      </div>
      <div className="">
        <h2 className='text-lighter text-xl font-[400]'>{title}</h2>
        <div className="flex items-center gap-2">
          <p className="text-sm text-lighter">{subtext}</p>
          <p className='text-xl font-normal  rounded-full text-white'>{number}</p>
        </div>
      </div>
    </div>
  )
}
export default DashboardCard