import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { BsCart4 } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../component/Cart";
import { useContext} from 'react'

function ProductDetail(){
    const {id} = useParams();
    const { cartItems, addToCart } = useContext(CartContext)
    // console.log(id)
    const [items, setItems] = useState([])
    useEffect(() =>{
        const fetchItems = async()=>{
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                setItems(data)
            }catch(err){
                console.log('error fetching data', err)
            }
        }
        fetchItems()
    }, [])
    return(
        <>
            <section className="text-center flex flex-col justify-center items-center pt-10 gap-y-4 ">
                <div className="bg-white rounded-xl shadow-md p-3"><img src={items.image} alt={items.title} className="h-96" /></div>
                <div className="py-5 flex flex-col justify-center items-center gap-y-4 w-full">
                <h2 className="text-xl">{items.title}</h2>
                <div className="text-center w-6/12 italic">{items.description}</div>
                <div className="bg-orange-500 text-white py-3 w-1/5">
                <h3 className="text-xl font-extrabold ">${items.price}</h3>
                </div>
                </div>
                <div className="py-6 flex justify-center items-center gap-x-7 w-full">
                <Link onClick={() => addToCart(items)} className="flex gap-x-2 bg-orange-500 p-3 justify-center italic w-72"><BsCart4/>ADD TO CART</Link>
                <Link className="bg-orange-500 text-white p-4"><FaPhone/></Link>
                </div>
            </section>
        </>
    )
}
export default ProductDetail