import { useGetAllBlogQuery } from "../apis/blogApi"
import SubNewsCard from "./SubNewsCard"

const Bettwrnews = () => {
  const { data } = useGetAllBlogQuery()
  return (
    <div className="flex flex-col justify-center md:px-20 lg:px-44 pt-20">
      <div className="text-center px-4">
        <p className="text-secondary tracking-wider font-worksans uppercase text-lg font-[700]">Better information better health</p>
        <h2 className="text-primary font-yeseva md:text-[32px] text-3xl font-[500] py-1">News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        {
          data?.data?.slice(0, 4).map((blog) => (
            <SubNewsCard key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}
export default Bettwrnews