import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Homepage from "./pages/Homepage"
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import SignIn from "./dashboard/SignIn";
import Layout from "./dashboard/layout/Layout";
import Dashboard from "./dashboard/pages/Dashboard";
import DoctorDetails from "./dashboard/pages/DoctorDetails";
import AllServices from "./dashboard/pages/AllServices";
import Departments from "./dashboard/pages/Departments";
import SingleDepartment from "./dashboard/components/SingleDepartment";
import SingleDoctor from "./dashboard/components/SingleDoctor";
import ProtectedRoute from "./features/ProtectedRoute";
import Appointments from "./dashboard/pages/Appointments";
import Profile from "./dashboard/pages/Profile";
import SingleNews from "./components/SingleNews";
import Blogs from "./dashboard/pages/Blogs";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: '/aboutus', element: <About /> },
        { path: '/services', element: <Services /> },
        { path: '/doctors', element: <Doctors /> },
        { path: '/news', element: <News /> },
        { path: '/contact', element: <Contact /> },
        { path: '/appointment', element: <Appointment /> },
        { path: '/news/post/:id', element: <SingleNews /> },
      ]
    },
    { path: "/admin", element: <SignIn /> },
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/dashboard",
          element: <Layout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: '/dashboard/doctors', element: <DoctorDetails /> },
            { path: '/dashboard/services', element: <AllServices /> },
            { path: '/dashboard/departments', element: <Departments /> },
            { path: '/dashboard/departments/:id', element: <SingleDepartment /> },
            { path: '/dashboard/doctors/:id', element: <SingleDoctor /> },
            { path: '/dashboard/appointments', element: <Appointments /> },
            { path: '/dashboard/profile', element: <Profile /> },
            { path: '/dashboard/blogs', element: <Blogs /> },
          ]
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}
export default App