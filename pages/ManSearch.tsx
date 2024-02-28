import { useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import ExportButton from "./components/ExportButton";
import ExportJsonButton from "./components/ExportJsonButton";
function ManSearch() {
  const [name, setName] = useState("");
  const [field, setField] = useState("Name"); // Default field selected
  const [data, setData] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/api/ManSearch", { name, field }).then((res) => setData(res.data));
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setField(e.target.value);
  };
const session = null;
  return (
    <div>
      <NavBar session={session} />
    
      <div className="flex justify-center items-center px-16 py-12 bg-MajorBG max-md:px-5">
        <div className="h-screen mt-10 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-45 max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center px-8 py-6 mt-36 w-full bg-SmallBG shadow-lg3 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-2xl">
                <div className="w-full">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-MajorBG">Query :</label>
                    <input type="text"  id="default-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Query" className="bg-Button border border-MajorBG text-MajorBG text-sm rounded-lg focus:ring-Button focus:border-Black block  p-2.5 dark:bg-Button dark:border-MajorBG dark:placeholder-MajorBG dark:text-MajorBG dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" />
                    <label htmlFor="default" className="block mb-2 mt-4 text-sm font-medium text-MajorBG dark:text-MajorBG">Default select</label>
                    <select onChange={handleFieldChange} id="default" className="bg-gray-50 border border-gray-300  mb-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-Button dark:border-gray-600 dark:placeholder-gray-400 dark:text-MajorBG dark:focus:ring-blue-500 dark:focus:border-blue-500 text-MajorBG">
                      <option value="Email">Email</option>
                      <option value="Password">Password</option>
                      <option value="Contact">Contact</option>
                      <option value="Name">Name</option>
                    </select>
                    <button type="submit" className=" mr-2 bg-Button hover:bg-[#60435F] text-Button_text font-bold py-2 px-4 rounded mt-4">
                      Submit
                    </button>
                    
                    <ExportButton name={name} /><ExportJsonButton name={name} />
                  </form>
                </div>
              </div>
            </div>
            <div className="mx-11 my-auto items max-w-full bg-Boxes h-[700px] rounded-[31px] w-[700px] max-md:mt-10 p-6 shadow-2xl bg-SmallBG shadow-SmallBG overflow-auto">
              <div className="text-MajorBG">
                <p>Response :</p>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManSearch;
