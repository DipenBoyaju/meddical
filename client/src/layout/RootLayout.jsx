import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div className="pt-0 md:pt-36">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default RootLayout