import { IoMdMenu  } from 'react-icons/io'
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Navbar(){
return(
    <>
        <nav className="bg-orange-200 py-3 px-12">
            <div className='flex'>
                <div className="flex items-center w-1/4">
                    <div className='mr-5'><IoMdMenu className='text-4xl cursor-pointer'/></div>
                    <div className='text-2xl'>Logo</div>
                </div>
                <div className="flex items-center w-3/4 justify-end ">
                    <Link to='/' className='mr-8'><AiOutlineHome className='text-4xl cursor-pointer'/></Link>
                    <Link to={`/cart`}><BsCart4 className='text-4xl cursor-pointer'/></Link>
                </div>
            </div>
        </nav>
    </>
)
}
export default Navbar