import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="bg-[#161A30] min-h-screen flex items-center justify-center">
      <div className="bg-[#F0ECE5] flex rounded-2xl shadow-lg max-w-3x1 p-5">
        <div id="Form" className="sm:w-1/2 flex flex-col px-8 gap-2">
          <h2 className="font-bold text-2x1 text-black">Register</h2>
          <p className="text-sm mt-1 text-black">
            Please Register to your V-Agent Account to start Searching through
            Millions of Records
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="p-2 rounded-xl border w-full mt-3 text-black"
                type="text"
                placeholder="Enter your Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2 rounded-xl border w-full mt-3 text-black"
                type="email"
                placeholder="Enter your Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2 rounded-xl border w-full mt-3 text-black"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            {error && <div className="text-black">{error}</div>}
            <button
              type="submit"
              className="text-white bg-black py-2 rounded-xl"
            >
              Register
            </button>
          </form>
        </div>
        <div className="w-1/2 sm:block hidden">
          {/* Use the img tag to display the image */}
          <img className="text-black" src="/pxfuel.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
