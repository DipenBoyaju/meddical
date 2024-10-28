import { BsCalendar2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ blog }) => {
  const nav = useNavigate()
  return (
    <div className='w-full font-worksans space-y-3'>
      <div className="w-full h-[60vh] overflow-hidden">
        <img src={blog?.image} alt="" className='w-full' />
      </div>
      <div className=" flex items-center gap-5 pt-3">
        <div className="flex items-center gap-2">
          <BsCalendar2 className='text-dark' />
          <p>{new Date(blog?.createdAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</p>
        </div>
        <div className="flex items-center gap-2">
          <FiUser className='text-secondary' />
          <p className="capitalize">By {blog?.author}</p>
        </div>
        <div className="flex items-center gap-2">
          <GoEye className='text-primary' />
          <p>{blog?.views}</p>
        </div>
        <div className="flex items-center gap-2">
          <FiHeart className='text-red-500' />
          <p>{blog?.likes}</p>
        </div>
      </div>
      <div className="">
        <h2 className='font-yeseva text-4xl text-primary '>{blog?.title}</h2>
        <p className='pt-4'>{blog?.description.slice(0, 400)}...</p>
        <div className=" mt-5">
          <button className='flex items-center gap-2 bg-light p-3 px-6 rounded-full text-primary font-[500] hover:bg-secondary hover:text-lighter transition-all duration-300' onClick={() => nav(`/news/post/${blog?._id}`)}>Read More <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}
export default NewsCard