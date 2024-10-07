import { useDispatch } from "react-redux";
import { addRole } from "../utils/redux/roleSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector} from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const selector = useSelector((store)=>store.role.currentRole)

  const handleChange = (value) => {
    dispatch(addRole(value));
  };

  const handleClick = () => {
    console.log(selector);
    
    if(!name || !password || selector.length === 0)
      setError("enter all the fields")
    else {
      navigate("/home");
      setError("")
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[800px]">
      <form className="border border-black w-[440px]">
        <h1 className="font-bold text-3xl flex justify-center mb-5">
          Defect Tracker
        </h1>
        <h4 className="font-bold bg-blue-500 text-white flex justify-center text-xl">
          Login
        </h4>
        <div className="border border-gray-300 p-4 pb-0 m-4 my-6 rounded-md">
          <div className="pb-4">
            <label>Username</label>
            <input
              className="border border-black ml-4 pl-2 rounded-md"
              type="text"
              value={name} onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <label>Password</label>
            <input
              className="border border-black ml-5 pl-2 rounded-md"
              type="password"
              value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <label className="mr-14">Role</label>
            <select
              onChange={(e) => handleChange(e.target.value)}
              className="p-2 rounded-md"
            >
              <option>Select role</option>
              <option>Tester</option>
              <option>Developer</option>
            </select>
          </div>
        </div>
      <h1 className="text-red-500 pl-5 pb-4">{error}</h1>
      </form>
      <button
        className="mt-8 border border-blue-500 rounded-lg p-2 px-4 text-xl hover:bg-blue-500 hover:text-white"
        onClick={handleClick}
      >
        Sign In
      </button>
    </div>
  );
};
export default LoginPage;
