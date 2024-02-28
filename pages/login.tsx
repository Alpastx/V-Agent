
import { useState } from "react";
import { useRouter } from "next/router"; // Changed from "next/navigation"
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { signIn } from "next-auth/react";

function onChange(value: string | null) {
  console.log("Captcha value:", value);
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="bg-MajorBG min-h-screen flex items-center justify-center">
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <div className="bg-SmallBG flex rounded-2xl shadow-lg p-4 ">
        <div id="Form" className=" flex flex-col px-8 gap-2  rounded-xl">
          <h2 className="font-bold text-2x1 text-MajorBG">Login</h2>
          <p className="text-sm mt-2 text-MajorBG ">
            Please login to your V-Agent Account to start Searching through
            Millions of Records
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2 rounded-xl border w-full mt-3 text-MajorBG bg-Button"
                type="email"
                placeholder="Enter your Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2 rounded-xl border w-full mt-3 text-MajorBG bg-Button"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            {error && <div className="text-black">{error}</div>}
            
            <button
              type="submit"
              className="text-MajorBG bg-Button py-2 rounded-xl"
            >
              Log in
            </button><div className=" flex items-center justify-center mt-5">
            <ReCAPTCHA sitekey="6LfgB3spAAAAAC3uLczktZqsAXrLcFyjCP7gy5jP" onChange={onChange}/></div>
          </form>
        </div>
        <div className="">
          {/* Change the image source to a valid URL */}
          <Image src="/logo-black.svg" alt="hi" width="200" height="200"
           className="text-black h-[90] w-96 rounded-2xl shadow-lg bg-SmallBG "
          />
        </div>
      </div>
    </div>
  );
}
