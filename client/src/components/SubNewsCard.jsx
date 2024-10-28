import news from '../assets/doctornews.jfif'
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const SubNewsCard = ({ blog }) => {
  return (
    <div className="flex justify-between gap-5 font-worksans rounded-lg overflow-hidden hover:shadow-md cursor-pointer h-40">
      <div className="h-40 w-60 overflow-hidden">
        <img src={news} alt="" className='h-full w-auto object-cover object-left' />
      </div>
      <div className="py-2 md:py-4 pr-4 w-full flex flex-col justify-between">
        <p className="text-secondary text-sm font-[500] capitalize">{new Date(blog?.createdAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })} | By {blog?.author}</p>
        <p className="text-dark text-lg pt-2 font-[500]">{blog?.title}</p>
        <div className="flex gap-2 ">
          <span className='flex gap-1 items-center text-sm'><FaRegEye className='text-purple-500' />{blog?.views}</span>
          <span className='flex gap-1 items-center text-sm'><FaRegHeart className='text-red-500' />{blog?.likes}</span>
        </div>
      </div>
    </div>
  )
}
export default SubNewsCard