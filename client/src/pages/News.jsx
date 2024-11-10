import GetInTouch from "../components/GetInTouch"
import Title from "../components/shared/Title"
import bg from '../assets/servicedoctor.jfif'
import NewsCard from "../components/NewsCard"
import { FiSearch } from "react-icons/fi";
import RecentPostCard from "../components/RecentPostCard";
import { useGetAllBlogQuery } from "../apis/blogApi";

const News = () => {
  const { data } = useGetAllBlogQuery()
  return (
    <div className="mt-[10%] md:mt-0">
      <Title title="Blog Posts" subtitle="News" bg={bg} position="25%" />
      <div className="flex flex-row">
        <div className="h-2 bg-light w-[16%]"></div>
        <div className="h-2 bg-primary w-[68%]"></div>
        <div className="h-2 bg-secondary w-[16%]"></div>
      </div>
      <div className="flex flex-row md:px-20 px-4 lg:px-44 pt-14 gap-5">
        <div className="md:w-2/3 space-y-8">
          {
            data?.data?.length > 0 ? (
              data?.data?.map((blog) => (
                <NewsCard key={blog._id} blog={blog} />
              ))
            ) : (
              <h1>No Blogs</h1>
            )
          }

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
export default News