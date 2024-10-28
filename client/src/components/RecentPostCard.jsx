import img from '../assets/servicedoctor.jfif'

const RecentPostCard = () => {
  return (
    <div className="flex items-center flex-row gap-2">
      <div className="w-1/4 rounded-md overflow-hidden h-14">
        <img src={img} alt="" className='h-full object-cover object-center' />
      </div>
      <div className="">
        <p className="text-secondary text-sm">Monday 05, September 2021</p>
        <p className="text-dark leading-4 pt-1 text-sm font-[500]">This Article's Title goes Here, but not too long.</p>
      </div>
    </div>
  )
}
export default RecentPostCard