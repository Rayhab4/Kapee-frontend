
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate=useNavigate();
  interface FormData {
    email: string;
    password: string;
  }
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onLogin = async (data: FormData) => {
    try {
      const { email, password } = data;
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const res = await axios.post(`http://localhost:5000/api_v1/user/userLogin`, formdata,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }

      )
     
    const userData=res?.data?.existingUser;
    localStorage.setItem("userKey",JSON.stringify({
        _id:userData._id,
        username:userData.username,
        email:userData.email,
        userRole:userData.userRole,
    }))
    localStorage.setItem("accessToken",userData.accessToken);
    if(userData.userRole==="admin")
    {
        navigate("/dashboard");
        Notify.success("Welcome Admin you are now in Admin Access Level");
    }
    else{
 navigate("/Home");
 Notify.info("You are not admin you can now access user access Level");
    }
      Notify.success("Login Successful");

      reset();

    } catch (error) {
      console.log("login failed", error);
      Notify.failure("Login Failed");
    }
  }
  return (
    < div className="flex flex-col items-center" >
      <form className="flex flex-col gap-3 mt-20 w-[20rem] h-[15rem] pl-20 "
        onSubmit={handleSubmit(onLogin)}
      >
        <input type="email" placeholder="Username" className="w-[15rem] p-1 border border-stone-500 rounded-sm"
          {...register("email", { required: true })}
        />
        <input type="password" placeholder="Password" className="w-[15rem] p-1 border border-stone-500 rounded-sm"
          {...register("password", { required: true, minLength: 6 })}
        />
        <button type="submit" className="p-1 w-16 bg-blue-500 rounded-sm text-white">Login</button>
        <span>If you do not have Account  <span><Link to="/register">Register</Link></span> </span>
      </form>

    </div>
  )
}
export default LoginForm;