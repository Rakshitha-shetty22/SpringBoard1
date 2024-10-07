import { useDispatch } from "react-redux";
import Header from "../header/Header";
import { addItems } from "../utils/redux/addSlice";
import { useState } from "react";

const AddDefects = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [priority, setPriority] = useState();

    const handleSubmit = () =>{
        dispatch(addItems({category,description,priority}))
    }

  return (
    <div className="flex flex-col justify-center items-center h-[800px]">
      <div className="border border-black w-[440px]">
        <Header />
        <form>
          <h4 className="font-bold bg-blue-500 text-white flex justify-center text-xl">
            Add Defects
          </h4>
          <div className="border border-gray-300 p-4 pb-0 m-4 my-6 rounded-md">
            <div className="pb-4">
              <label className="pr-4">Defect Category</label>
              <select value={category} onChange={(e)=>setCategory(e.target.value)} className="p-2 rounded-md">
                <option>Select</option>
                <option>UI</option>
                <option>Functional</option>
              </select>
            </div>

            <div className="flex items-center pb-4">
              <label className="pr-12">Description</label>
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="border border-gray-300 rounded-md pl-2" placeholder="Enter description" />
            </div>

            <div className="pb-4">
              <label className="pr-20">Priority</label>
              <select  value={priority} onChange={(e)=>setPriority(e.target.value)} className="p-2 rounded-md w-[160px]">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </form>
        </div>
        <button onClick={handleSubmit} className="mt-8 border border-blue-500 rounded-lg p-2 px-4 text-xl hover:bg-blue-500 hover:text-white">
          Add Defects
        </button>
    </div>
  );
};

export default AddDefects;
