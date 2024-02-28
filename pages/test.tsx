import { useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";

function ManSearch() {
  const [name, setName] = useState("");
  const [field, setField] = useState("Name"); // Default field selected
  const [data, setData] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/api/Man-Search", { name, field }).then((res) => setData(res.data));
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setField(e.target.value);
  };
const session = null;
  return (
    <div>
      <NavBar session={session} />
    
      <div className="flex justify-center items-center px-16 py-12 bg-[#FFD1E3] max-md:px-5">
        <div className="h-screen mt-10 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-45 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-16 py-8 mt-36 w-10/12 bg-[#392467] rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-2xl">
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#FFD1E3]">Query :</label>
                    <input type="text" id="default-input" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-whitetext-sm rounded-lg focus:ring-[#E2A3C7] focus:border-[#E2A3C7] block p-2.5 dark:bg-[#E2A3C7] dark:border-[#E2A3C7] dark:placeholder-[#E2A3C7] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <label htmlFor="default" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Default select</label>
                    <select onChange={handleFieldChange} id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value="Email">Email</option>
                      <option value="Password">Password</option>
                      <option value="Contact">Contact</option>
                      <option value="Name">Name</option>
                    </select>
                    <button type="submit" className="bg-[#FFD1E3] hover:bg-[#60435F] text-[#392467] font-bold py-2 px-4 rounded mt-4">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="mx-auto my-auto items max-w-full bg-[#392467] h-[569px] rounded-[31px] w-[552px] max-md:mt-10 p-6 shadow-2xl shadow-[#392467] overflow-auto">
              <div className="text-[#FFD1E3]">
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
