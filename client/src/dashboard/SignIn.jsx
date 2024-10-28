import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminLoginMutation } from "../apis/adminApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAdmin } from "../slice/adminSlice";

const SignIn = () => {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [adminLogin] = useAdminLoginMutation()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await adminLogin(formData).unwrap();

      if (response.success === true) {
        console.log(response);

        dispatch(setAdmin({ admin: response.admin, token: response.token }))
        nav('/dashboard')
        toast.success(response.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
      });
    }
  }
  return (
    <div className="flex min-h-screen justify-center items-center bg-primary">
      <div className="border p-6 rounded-lg shadow-md w-[400px] bg-lighter">
        <div className="text-center mb-6">
          <span className="text-primary text-4xl font-yeseva cursor-pointer hidden md:block" onClick={() => nav('/')}>
            MED<span className="text-secondary">DICAL</span>
          </span>
        </div>
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-dark font-worksans">Welcome Back Admin</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-secondary hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg font-medium hover:bg-secondary transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
