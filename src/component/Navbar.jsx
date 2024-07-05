import { IoMdMenu  } from 'react-icons/io'
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from "./Cart"
import { useContext} from 'react'
import Sidebar from './Sidebar';

function Navbar(){
    const { cartItems, addToCart } = useContext(CartContext)
    const [showSidebar, setShowSidebar] = useState(false)
    const toggle = () => {
        setShowSidebar(!showSidebar)
      }
return(
    <>
        <nav className="bg-orange-500 shadow-md py-3 px-12">
            <div className='flex'>
                <div className="flex items-center w-1/4">
                    <div className='mr-5'><IoMdMenu className='text-4xl cursor-pointer' onClick={toggle}/></div>
                    <div className='text-2xl'>Logo</div>
                </div>
                <div className="flex items-center w-3/4 justify-end ">
                    <Link to='/' className='mr-8'><AiOutlineHome className='text-4xl cursor-pointer'/></Link>
                    <Link to={`/cart`} className='flex'><BsCart4 className='text-4xl cursor-pointer'/>{cartItems.length}</Link>
                </div>
            </div>
        </nav>
        <Sidebar showSidebar={showSidebar} toggle={toggle}/>
    </>
)
}
export default Navbar