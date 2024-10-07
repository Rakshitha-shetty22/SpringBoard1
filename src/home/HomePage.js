import { useSelector, useDispatch } from "react-redux";
import { closeItem } from "../utils/redux/addSlice"; // Update with actual path
import Header from "../header/Header";
import { useEffect, useState } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("All");
  const [category, setCategory] = useState("All");
  const items = useSelector((store) => store.add.items);
  const [defects, setDefects] = useState(items);

  const handleClick = (index) => {
    dispatch(closeItem(index));
  };

  useEffect(() => {
    let filteredDefects = items;
  
    if (priority !== "All") {
      filteredDefects = filteredDefects.filter((i) => i.priority === priority);
    }
  
    if (category !== "All") {
      filteredDefects = filteredDefects.filter((i) => i.category === category);
    }

    if(priority === "All" && category === "All")
      setDefects(items);

    setDefects(filteredDefects);
    
  }, [priority, category, items]);
  
  return (
    <div className="flex flex-col justify-center items-center h-[800px]">
      <div className="border border-black w-[800px]">
        <Header />
        <form className="border border-gray-300 mx-4 my-4 rounded-md flex items-center flex-col">
          <h4 className="font-bold flex justify-center text-xl my-2">
            Filter Details
          </h4>
          <div className="my-2">
            <label className="pr-4">Priority</label>
            <select
              className="p-2 rounded-md"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="my-2">
            <label className="pr-4">Category</label>
            <select className="p-2 rounded-md" value={category}  onChange={(e) => setCategory(e.target.value)}>
              <option>All</option>
              <option>UI</option>
              <option>Functional</option>
            </select>
          </div>
        </form>
        <div>
          <h4 className="font-bold flex justify-center text-xl my-2">
            Defect Details
          </h4>
          <table className="w-[96%] mx-4 my-2 border border-gray-400">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 px-4 py-2">
                  Defect Category
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-400 px-4 py-2">Priority</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
                <th className="border border-gray-400 px-4 py-2">
                  Change Status
                </th>
              </tr>
            </thead>
            <tbody>
              {defects.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-400 px-4 py-2">
                    {item.category}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.description}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.priority}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.status}
                  </td>
                  <td
                    className={`border border-gray-400 px-4 py-2 cursor-pointer ${
                      item.status === "open" ? "text-blue-600" : "text-gray-400"
                    }`}
                    onClick={() => {
                      if (item.status === "open") {
                        handleClick(index);
                      }
                    }}
                  >
                    {item.status === "open"
                      ? "Close Defect"
                      : "No action pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
