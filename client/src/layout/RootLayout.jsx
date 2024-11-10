import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default RootLayout