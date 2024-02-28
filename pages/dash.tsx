import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";
const FeatureCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <article className="flex flex-col justify-center p-6 w-full text-MajorBG rounded-xl bg-stone-50 max-w-[610px] max-md:px-5 max-md:mt-1">
    <h4 className="text-4xl font-black tracking-tighter">{title}</h4>
    <p className="mt-3 text-2xl tracking-tighter">{text}</p>
  </article>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <section className="flex flex-col pb-8 mt-3 rounded-3xl border-2 border-solid border-stone-50 max-md:max-w-full ">
    <div className="flex gap-0 justify-between p-8 font-black rounded-3xl bg-SmallBG max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="grow justify-center py-2 my-auto text-4xl tracking-tighter text-MajorBG max-md:max-w-full">{question}</div>
      <div className="justify-center items-center px-6 h-16 text-3xl tracking-tighter text-center text-white whitespace-nowrap bg-MajorBG aspect-square rounded-[60px] max-md:px-5 "> <div className="mt-2.5 ">+ </div></div>
    </div>
    <p className="mt-8 ml-8 text-2xl tracking-tighter text-MajorBG max-w-[1200px] w-[1200px] max-md:max-w-full">{answer}</p>
  </section>
);

const SearchEngineComponent: React.FC = () => {
  return (
    <main className="flex flex-col bg-white">
      <header className="justify-between pl-20 w-full bg-MajorBG max-md:pl-5 max-md:max-w-full ">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-2xl tracking-tighter text-SmallBG max-w-[816px] max-md:mt-10 max-md:max-w-full">
              <h1 className="text-7xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl"> Welcome to the Ultimate Search Engine </h1>
              <p className="mt-6 max-md:max-w-full"> Unleash the power of search with our revolutionary engine that scours through millions of records and multiple file types. </p>
              <button  className="justify-center self-start p-6 mt-16 font-bold text-center text-MajorBG whitespace-nowrap bg-SmallBG rounded-xl max-md:px-5 max-md:mt-10 "><Link className="bg-o" href="/login">Start Searching</Link></button>
            </div>
          </article>
          <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-12 pl-10 w-full  max-md:mt-10 max-md:max-w-full">
            <Link href="/login">
              <Image height={680} width={680} src="/logo-color.svg" alt="Search Engine" className="rounded-2xl shadow-xl  "/>
              </Link>
            </div>
          </article>
        </section>
      </header>
      <section className="flex justify-center items-center px-16 py-12 w-full bg-SmallBG max-md:px-5 max-md:max-w-full">
        <article className="flex flex-col items-start mt-16 mb-12 w-full max-w-[1680px] max-md:my-10 max-md:max-w-full">
          <h2 className="text-7xl font-black tracking-tighter text-MajorBG max-md:max-w-full max-md:text-4xl"> Search Engine Features </h2>
          <p className="mt-6 text-2xl tracking-tighter text-MajorBG max-w-[800px] max-md:max-w-full">Discover the power of our search engine and unlock a world of possibilities. </p>
          <div className="flex-wrap justify-center content-start self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center max-md:mt-1 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <FeatureCard
                        title="Fast and Efficient"
                        text="Find what you're looking for in seconds with our lightning-fast search engine."
                      />
                      <FeatureCard
                        title="Comprehensive Search"
                        text="Search through multiple file types and access millions of records with ease."
                      />
                      <FeatureCard
                        title="Intelligent Suggestions"
                        text="Get intelligent suggestions and recommendations as you type, making your search experience even better."
                      />
                    </div>
                  </div><div className="mt-6">
                  <FeatureCard 
                    title="User-Friendly Interface"
                    text="Enjoy a seamless and intuitive user interface that makes searching a breeze."
                  /></div>
                </div>
              </div>
              <article className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full ">
                <FeatureCard
                  title="Advanced Filters"
                  text="Refine your search results with advanced filters to quickly find exactly what you need."
                />
              </article>
            </div>
          </div>
        </article>
      </section>
      <section className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-16 mb-12 w-full max-w-[1680px] max-md:my-10 max-md:max-w-full">
          <h3 className="text-7xl font-black tracking-tighter text-zinc-900 max-md:max-w-full max-md:text-4xl"> FAQ </h3>
          <FaqItem
            question="What is Search?"
            answer="Advanced Search is a powerful feature that allows you to refine your search results by specifying specific criteria and using operators. With Advanced Search, you can search through multiple file types and millions of records to find exactly what you're looking for."
          />
          <FaqItem
            question="How does Advanced Search work?"
            answer="Advanced Search works by allowing you to input specific criteria and operators to narrow down your search results. You can specify file types, keywords, dates, and other parameters to find the most relevant results. The search engine will then search through millions of records and present you with the matching results."
          />
          <FaqItem
            question="What are the benefits of using Advanced Search?"
            answer="Using Advanced Search offers several benefits. Firstly, it allows you to perform more targeted searches by specifying specific criteria. This helps you find the most relevant results quickly and efficiently. Secondly, Advanced Search can search through multiple file types, so you can find documents, images, videos, and more all in one search. Lastly, the search engine is optimized to handle millions of records, ensuring that you get comprehensive search results."
          />
          <FaqItem
            question="Can I save my Advanced Search settings?"
            answer="Yes, you can save your Advanced Search settings for future use. This allows you to quickly perform the same search again without having to input all the criteria and operators again. Simply click on the 'Save Search' button and give your search a name. You can then access your saved searches from the 'Saved Searches' section and run them with a single click."
          />
          <FaqItem
            question="Is Advanced Search available for all file types?"
            answer="Yes, Advanced Search is available for all supported file types. Whether you're searching for documents, images, videos, or any other file type, you can use Advanced Search to refine your search results and find exactly what you need."
          />
        </div>
      </section>
      <section className="flex flex-wrap justify-center content-center items-center px-16 py-12 w-full bg-SmallBG max-md:px-5 max-md:max-w-full">
        <article className="flex flex-col mt-16 mb-12 w-full max-w-[1680px] max-md:my-10 max-md:max-w-full">
          <header className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-2xl tracking-tighter max-md:mt-10 max-md:max-w-full">
                <h4 className="text-7xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl text-MajorBG"> Contact Us </h4>
                <div className="flex flex-wrap gap-5 justify-between content-start mt-6 text-MajorBG max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-MajorBG">Email</p>
                    <p className="mt-1 text-MajorBG">support@searchengine.com</p>
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-MajorBG">Phone</p>
                    <p className="mt-1 text-MajorBG">+1 123-456-7890</p>
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="font-bold text-MajorBG">Address</p>
                    <p className="mt-1 text-MajorBG"> 123 Main Street, City, State, Country </p>
                  </div>
                </div>
                <button className="justify-center self-start p-6 mt-16 font-bold text-center text-white whitespace-nowrap rounded-xl bg-zinc-900 max-md:px-5 max-md:mt-10"> Submit </button>
              </div>
            </div>
            <form className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 py-12 w-full text-MajorBG rounded-3xl bg-stone-50 max-w-[816px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h4 className="text-5xl font-black tracking-tighter max-md:max-w-full max-md:text-4xl"> Get in Touch </h4>
                <div className="flex gap-2.5 justify-between mt-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 py-0.5">
                    <label htmlFor="name" className="text-base font-medium tracking-widest"> Name </label>
                    <input id="name" className="justify-center items-start py-6 pr-16 pl-6 mt-3.5 text-xl tracking-tighter bg-MajorBG rounded-xl max-md:px-5"  placeholder="Enter your name" aria-label="Enter your name"/>
                  </div>
                  <div className="flex flex-col flex-1 py-0.5">
                    <label htmlFor="surname" className="text-base font-medium tracking-widest">Surname</label>
                    <input id="surname" className="justify-center items-start py-6 pr-16 pl-6 mt-3.5 text-xl tracking-tighter bg-MajorBG rounded-xl max-md:px-5"  placeholder="Enter your surname" aria-label="Enter your surname"/>
                  </div>
                </div>
                <label htmlFor="email" className="mt-7 text-base font-medium tracking-widest max-md:max-w-full"> Mail </label>
                <input id="email" className="justify-center items-start py-5 pr-16 pl-6 mt-3.5 text-xl tracking-tighter whitespace-nowrap bg-MajorBG rounded-xl max-md:px-5 max-md:max-w-full" placeholder="Enter your email" aria-label="Enter your email"/>
                <label htmlFor="address" className="mt-7 text-base font-medium tracking-widest max-md:max-w-full"> Address </label>
                <input id="address" className="justify-center items-start py-5 pr-16 pl-6 mt-3.5 text-xl tracking-tighter whitespace-nowrap bg-MajorBG rounded-xl max-md:px-5 max-md:max-w-full " placeholder="Enter your address" aria-label="Enter your address"/>
                <label htmlFor="description" className="mt-7 text-base font-medium tracking-widest max-md:max-w-full "> Description </label>
                <textarea className="shrink-0 mt-2.5 bg-MajorBG rounded-xl h-[156px] max-md:max-w-full" />
                <button className="justify-center p-6 mt-6 text-2xl font-bold tracking-tighter text-center text-SmallBG whitespace-nowrap bg-MajorBG rounded-xl max-md:px-5 max-md:max-w-full"> Submit </button>
              </div>
            </form>
          </header>
        </article>
      </section>
    </main>
  );
};

export default SearchEngineComponent;
