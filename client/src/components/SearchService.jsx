import { useNavigate } from "react-router-dom"
import { useSearchServiceQuery } from "../apis/serviceApi"

const SearchService = ({ searchTitle, setSearchTitle }) => {
  const { data } = useSearchServiceQuery(searchTitle)
  const nav = useNavigate()

  return (
    <div className="bg-white absolute top-16 rounded-md w-[250px] p-3">
      {data && data?.data?.length > 0 ? (
        <ul>
          {data?.data?.map((service, index) => (
            <li key={index} className="p-2 border-b flex gap-3 items-center cursor-pointer hover:bg-light rounded-sm text-dark" onClick={() => {
              nav('/service')
              setSearchTitle("")
            }}>
              <div className="h-10 w-10 rounded-md overflow-hidden">
                <img src={service?.image} alt="" className="w-full object-cover h-full object-center" />
              </div>
              <p className="text-lg">{service?.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-2 text-dark">
          <p>No results found</p>
        </div>
      )}
    </div>
  )
}
export default SearchService