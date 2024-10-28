import { MdArrowForwardIos } from "react-icons/md"
import BlogCards from "../components/BlogCards"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"
import AddBlog from "../components/AddBlog"
import { useGetAllBlogQuery } from "../../apis/blogApi"

const Blogs = () => {
  const [createBlog, setCreateBlog] = useState(false)
  const { data } = useGetAllBlogQuery()
  return (
    <div className="font-worksans pt-3">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-dark flex items-center gap-2 text text-xl font-[500]">Blogs <MdArrowForwardIos className="text-sm text-zinc-400" /><span className="text-zinc-400 text-sm font-light">All Blogs</span></p>
        </div>
        <div className="">
          <button className="bg-primary text-lighter hover:bg-light hover:text-primary transition-all duration-300  p-2 px-4 rounded-sm flex items-center gap-2" onClick={() => setCreateBlog((prev) => !prev)}><FaPlus />Add Blog</button>
        </div>
      </div>
      <div className="pt-6 overflow-x-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {
          data?.data?.length > 0 ? (
            data?.data?.map((blog) => (
              <BlogCards key={blog._id} blog={blog} />
            ))
          ) : (
            <h1>No Blogs</h1>
          )
        }
      </div>
      {
        createBlog && <AddBlog setCreateBlog={setCreateBlog} />
      }
    </div>
  )
}
export default Blogs