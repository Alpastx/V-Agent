import Link from "next/link";


interface NavBarProps {
  session: any; // Adjust the type of session based on your actual session object structure
}

export default function NavBar({ session }: NavBarProps) {
  return (
    <div className="bg-MajorBG">
      <div className="container mx-auto flex items-center  px-6 h-24 rounded-b-3xl bg-red  bg-SmallBG">
        <h1 className="text-3xl text-SmallBG_text font-semibold">
          <Link href="/dashboard">Welcome {session?.user?.name}</Link>
        </h1>
        <div className="grow">
          <div className="flex items-end justify-end gap-3 md:gap-16 text-SmallBG_text">
            <Link href="/Fuzzy">Fuzzy-Search</Link>
            <Link href="/ManSearch">Manual-Search</Link>
            <Link href="/Upload">Upload</Link>
            <button  className="ml-8 bg-[#FFD1E3] px-4 py-2 rounded-lg text-MajorBG">Sign Out</button>
        
          </div>
        </div>
      </div>
    </div>
  );
}
