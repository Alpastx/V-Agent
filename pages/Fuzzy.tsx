import { useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import ExportButton from "./components/ExportButton";
import ExportJsonButton from "./components/ExportJsonButton";
function Fuzzy() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Specify the type of the event parameter
    e.preventDefault();
    axios.post("/api/FuzzySearch", { name }).then((res) => setData(res.data));
  };

  let session = null;
  return (
    
    <div>
      <NavBar session={session} />
      <div className="flex justify-center items-center px-16 py-12 bg-MajorBG max-md:px-5">
        <div className="h-screen mt-10 w-full max-w-[1219px] max-md:mt-10 max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
            <div className="flex flex-col w-45 max-md:ml-0 max-md:w-full mt-10">
              <div className="flex justify-center items-center px-8 py-6 mt-36 w-full bg-SmallBG rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-2xl">
                <div className="w-full">
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-SmallBG_text">Query :</label>
                    <input type="text"  id="default-input" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-whitetext-sm rounded-lg focus:ring-comps focus:border-comps block  p-2.5 dark:bg-Button dark:border-[#E2A3C7] dark:placeholder-[#E2A3C7] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"/>
                    <button type="submit" className=" mr-2 bg-Button hover:bg-[#60435F] text-Button_text font-bold py-2 px-4 rounded mt-4">
                      Submit
                    </button>
                    <ExportButton name={name} /><ExportJsonButton name={name} />
                  </form>
                </div>
              </div>
            </div>
            <div className="mx-11 my-auto items max-w-full bg-Boxes h-[700px] rounded-[31px] w-[700px] max-md:mt-10 p-6 shadow-2xl bg-SmallBG shadow-SmallBG overflow-auto">
              <div className="text-SmallBG_text">
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

export default Fuzzy;
