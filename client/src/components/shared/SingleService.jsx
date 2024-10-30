import { useGetServiceByIdQuery } from "../../apis/serviceApi"

const SingleService = ({ id }) => {
  const { data } = useGetServiceByIdQuery(id)
  const service = data?.data
  return (
    <div>
      <div className="md:h-[60vh] overflow-hidden">
        <img src={service?.image} alt="" className="h-full object-cover object-center w-full" />
      </div>
      <div className="">
        <h3 className="text-3xl font-yeseva text-primary py-4">{service?.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at laudantium. Non quia soluta quod eius asperiores placeat blanditiis veritatis repudiandae ratione doloribus nesciunt, sequi ad! Alias possimus impedit eius magni rem rerum adipisci modi odio! Sunt molestiae temporibus possimus repellendus? Neque cumque nihil magnam optio quos doloribus laborum necessitatibus illum beatae dolores alias culpa, obcaecati perspiciatis tempore dolorem? Nulla.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, at laudantium. Non quia soluta quod eius asperiores placeat blanditiis veritatis repudiandae ratione doloribus nesciunt, sequi ad! Alias possimus impedit eius magni rem Neque cumque nihil magnam optio quos Nulla.</p>
      </div>
    </div>
  )
}
export default SingleService