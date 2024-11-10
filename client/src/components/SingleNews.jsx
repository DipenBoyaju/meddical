import { BsCalendar2 } from "react-icons/bs"
import bg from "../assets/doctornews.jfif"
import { FiHeart, FiSearch, FiUser } from "react-icons/fi"
import { GoEye } from "react-icons/go"
import RecentPostCard from "./RecentPostCard"
import GetInTouch from "./GetInTouch"
import { useParams } from "react-router-dom"
import { useGetBlogByIdQuery } from "../apis/blogApi"

const SingleNews = () => {
  const { id } = useParams();
  const { data } = useGetBlogByIdQuery(id)

  const blog = data?.data

  return (
    <div className="mt-[10%] md:mt-0">
      <div className="px-4 md:px-20 lg:px-44 h-64 relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: `center 15%` }}>
        <div className="h-full w-full absolute bg-white left-0 top-0 opacity-50 z-10"></div>
        <div className="pt-20 z-20 relative">
          <p className="text-primary font-worksans text-lg capitalize">Home / News / {blog?.category}</p>
          <h1 className="font-yeseva text-3xl md:text-5xl font-medium text-primary">{blog?.title}</h1>
        </div>
        <div className=" flex items-center gap-5 pt-3 z-20 relative font-[500]">
          <div className="flex items-center gap-2">
            <BsCalendar2 className='text-lighter' />
            <p>{new Date(blog?.createdAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</p>
          </div>
          <div className="flex items-center gap-2">
            <FiUser className='text-secondary' />
            <p>By {blog?.author}</p>
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
      </div >
      <div className="flex flex-row md:px-20 px-4 lg:px-44 pt-14 gap-5">
        <div className="md:w-2/3">
          <div className="w-full h-[60vh] overflow-hidden">
            <img src={blog?.image} alt="" className='w-full' />
          </div>
          <div className=" pt-8">
            <p className="font-[500] text-lg">{blog?.description}</p>
          </div>
        </div>
        <div className="w-1/3 hidden md:block">
          <div className=" bg-primary w-full rounded-md flex justify-between items-center overflow-hidden">
            <input type="text" className="px-3 w-full focus:outline-none h-[50px] bg-transparent text-light placeholder:text-light" placeholder="Search" />
            <div className="px-3">
              <FiSearch className="text-light text-2xl cursor-pointer" />
            </div>
          </div>
          <div className=" border p-5 py-6 rounded-lg overflow-hidden mt-6">
            <h3 className="font-yeseva text-primary text-3xl">Recent Posts</h3>
            <div className="mt-6 space-y-3">
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  )
}
export default SingleNews