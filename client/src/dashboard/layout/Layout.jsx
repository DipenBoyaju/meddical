import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

const Layout = () => {
  return (
    <div className="flex h-screen bg-lighter font-worksans">
      <div className="w-[100px] md:w-[300px] bg-gray-100 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full sidebar" style={{ width: 'calc(100% - 300px)' }}>
        <div className="h-16">
          <Topbar />
        </div>
        <div className="flex-grow p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Layout