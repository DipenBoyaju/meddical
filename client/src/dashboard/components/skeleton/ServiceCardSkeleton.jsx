import image from '../../../assets/imageicon.png'

const ServiceCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden shadow-md" >
      <div className="w-full h-56 flex items-center justify-center overflow-hidden">
        <img src={image} alt="" className="w-44 opacity-50" />
      </div>
      <div className="bg-white">
        <div className="p-3">
          <div className="h-2 w-44 bg-zinc-400 rounded-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <button className="bg-zinc-300 p-2 w-full py-4 flex justify-center"><div className='h-2 w-12 bg-zinc-400 rounded-full'></div></button></div>
          <div className="w-1/2">
            <button className="bg-zinc-300 p-2 w-full py-4 flex justify-center"><div className='h-2 w-12 bg-zinc-400 rounded-full'></div></button></div>
        </div>
      </div>
    </div>
  )
}
export default ServiceCardSkeleton