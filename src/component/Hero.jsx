import { FaSearch } from "react-icons/fa";
function Hero() {
   
  return (
    <>
      <section className="bg-orange-500 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Intro message for the e commerce site
          </h1>
          <div className="flex items-center gap-x-7">
            <div className="flex w-2/4 relative items-center ">
            <FaSearch className="text-slate-500 absolute top-3 left-2"/>
            <input
              type="text"
              placeholder="Search for products, brands and categories...."
              className=" italic w-full  px-7 py-2 outline-none text-lg"
            />
            </div>
            <button className="bg-green-500 rounded-xl text-xl px-2 py-3 hover:bg-green-700">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
