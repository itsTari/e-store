import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { CartContext } from "../component/Cart";
import { FaSearch } from "react-icons/fa";
function SearchPage({showModal, toggle, filteredProducts}) {
//   const { cartItems } = useContext(CartContext);
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([])

//   useEffect(() =>{
//     const fetchItems = async()=>{
//         try{
//             const res = await fetch(`https://fakestoreapi.com/products`)
//             const data = await res.json()
//             setProducts(data)
//         }catch(err){
//             console.log('error fetching data', err)
//         }
//     }
//     fetchItems()
// }, [])

// const filteredProducts = products.filter((product) => {
//     if (
//       product.image.toLowerCase().includes(search) ||
//       product.title.toLowerCase().includes(search) ||
//       product.category.toLowerCase().includes(search)
//     ) {
//       return product;
//     }
//   });
  return (
    showModal &&(
        <div className="p-5 w-1/3 absolute top-80 left-20 bg-white shadow-lg z-10">
      {/* <div className="flex w-full relative items-center ">
            <FaSearch className="text-slate-500 absolute top-3 left-2"/>
            <input
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
              type="text"
              placeholder="Search for products, brands and categories...."
              className=" italic w-full  px-7 py-2 outline-none text-lg"
            />
            </div> */}
        <div className="display">
          {filteredProducts.map((item) => (
            <Link to={`/detail/${item.id}`} className="item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md h-24"
                />
              <h6>{item.category}</h6>
              <h3>{item.title}</h3>
              <h5>${item.price}</h5>
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

export default SearchPage;
