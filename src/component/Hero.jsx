import { FaSearch } from "react-icons/fa";
import SearchPage from "./SearchPage";
import { useState, useEffect } from "react";
function Hero() {
  const [showModal, setShowModal] = useState(false)
  const toggle = () => {
    setShowModal(!showModal)
  }

  // search func
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() =>{
    const fetchItems = async()=>{
        try{
            const res = await fetch(`https://fakestoreapi.com/products`)
            const data = await res.json()
            setProducts(data)
        }catch(err){
            console.log('error fetching data', err)
        }
    }
    fetchItems()
}, [])

const filteredProducts = products.filter((product) => {
    if (
    product.title.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search)
    ) {
      return product;
    }
  });
  
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
              onClick={toggle}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
              type="text"
              placeholder="Search for products, brands and categories...."
              className=" italic w-full z-30  px-7 py-2 outline-none text-lg"
            />
            </div>
            {/* <button className="bg-green-500 rounded-xl text-xl px-2 py-3 hover:bg-green-700">
              Shop Now
            </button> */}
          </div>
        </div>
      </section>
      <SearchPage search={search} showModal={showModal} toggle={toggle} filteredProducts={filteredProducts} />
      <div onClick={()=>setShowModal(false)} className={`w-full h-[100svh] bg-black opacity-40 fixed top-0 z-20 ${showModal?"":"hidden"}`}></div>
    </>
  );
}
export default Hero;
