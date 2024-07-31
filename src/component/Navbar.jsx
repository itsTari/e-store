import { IoMdMenu  } from 'react-icons/io'
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState, useEffect,useRef } from 'react';
import { CartContext } from "./Cart"
import { useContext} from 'react'
import Sidebar from './Sidebar';

function Navbar(){
    const {cartItems} = useContext(CartContext)
    const [showSidebar, setShowSidebar] = useState(false)
    let menuRef = useRef()
    const toggle = () => {
        setShowSidebar(!showSidebar)
        if(!showSidebar){
            document.body.style.overflow ='hidden';
        }else{
            document.body.style.overflow ='unset';

        }
        
      }
      useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setShowSidebar(false);
                document.body.style.overflow ='unset';
            }
        }
        document.addEventListener('mousedown', handler)

        return()=>{
            document.removeEventListener('mousedown', handler)
        }
      },[]);
return(
    <>
        <nav className="bg-orange-500 shadow-md py-3 px-12">
            <div className='flex' >
                <div className="flex items-center w-1/4" ref={menuRef} >
                    <div className='mr-5'><IoMdMenu className='text-4xl cursor-pointer text-white' onClick={toggle}/></div>
                    <div className='text-2xl text-white'>Logo</div>
                </div>
                <div className="flex items-center w-3/4 justify-end ">
                    <Link to='/' className='mr-8'><AiOutlineHome className='text-4xl cursor-pointer text-white'/></Link>
                    <Link to={`/cart`} className='flex text-white'><BsCart4 className='text-4xl cursor-pointer text-white'/>{cartItems.length}</Link>
                </div>
            </div>
        </nav>
        <Sidebar showSidebar={showSidebar} toggle={toggle}/>
        <div className={`w-full h-[100svh] bg-black z-40 opacity-40 absolute  ${showSidebar? "" : "hidden"} `}></div>
    </>
)
}
export default Navbar