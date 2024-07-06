import { Link } from "react-router-dom"
import { useEffect} from "react";
function Sidebar({showSidebar, toggle}){


    return(
        <>
           {showSidebar && (<div  className="w-1/4 shadow-md bg-white h-dvh z-10 transition ease-in absolute z-50 pt-10 px-10">
                <div className="flex flex-col gap-y-4">
                <button className="bg-orange-500 text-white p-3 font-bold rounded-md">Sign Up</button>
                <button className="bg-orange-500 text-white p-3 font-bold rounded-md">Login In</button>
                </div>
                <h2 className="text-center py-10 text-xl">Categories</h2>
                <ul className="flex flex-col gap-y-5 pb-20">
                    <Link>Men's Clothing</Link>
                    <Link>Women Clothing</Link>
                    <Link>electronics</Link>
                    <Link>jewelery</Link>
                </ul>
                
                <div className="text-center flex flex-col gap-y-5">
                    <Link to='/products' className="bg-green-500 p-3 font-bold rounded-md">Our products</Link>
                    <h1 className="bg-green-500 p-3 font-bold rounded-md">Contact Us</h1>
                </div>
            </div>)}
        </>
    )
}
export default Sidebar