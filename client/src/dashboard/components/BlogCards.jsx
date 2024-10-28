import { GoEye } from 'react-icons/go'
import img from '../../assets/doctornews.jfif'
import { FiHeart } from 'react-icons/fi'
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import EditBlog from './EditBlog';

const BlogCards = ({ blog }) => {
  const [editBlog, setEditBlog] = useState(false)
  return (
    <div className="flex flex-row gap-3 w-full rounded-md overflow-hidden border">
      <div className="w-2/5 h-full relative">
        <img src={blog?.image} alt="" className='h-full w-full object-cover object-center' />
        <div className="bg-white absolute top-0 p-2 rounded-br-md hover:bg-secondary hover:text-white cursor-pointer transition-all duration-300" onClick={() => setEditBlog(true)}>
          <CiEdit className='text-2xl' />
        </div>
      </div>
      <div className="w-3/5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="text-[12px] bg-secondary text-white w-fit px-2 py-[2px] capitalize rounded-md">{blog?.category}</p>
          <p className='font-[500] text-primary capitalize bg-light p-2 px-3 rounded-bl-md text-sm'>{blog?.author}</p>
        </div>
        <h2 className="font-yeseva text-lg text-primary">{blog?.title}</h2>
        <p className="text-sm">{blog?.description.slice(0, 150)}...</p>
        <div className="bg-primary px-2 py-1 rounded-t-md text-lighter flex justify-between mt-2">
          <div className="text-sm">{new Date(blog?.createdAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</div>
          <div className="flex flex-row gap-3">
            <div className="flex items-center gap-2">
              <GoEye className='text-secondary' />
              <p>{blog?.views}</p>
            </div>
            <div className="flex items-center gap-2">
              <FiHeart className='text-red-500' />
              <p>{blog?.likes}</p>
            </div>
          </div>
        </div>
      </div>
      {editBlog && <EditBlog setEditBlog={setEditBlog} blog={blog} />}
    </div>
  )
}
export default BlogCards