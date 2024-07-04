import { Link } from "react-router-dom"
function DisplayDiv({product}){
    return(
        <>
            <div className="bg-white rounded-xl shadow-md flex flex-col items-center gap-y-3 pt-4 px-1 text-center">
                <div className="">
                    <img src={product.image} alt={product.description} className="h-60" />
                </div>
                <h3 className="font-bold">{product.title}</h3>
                <div className="mb-5 flex gap-x-10">
                    <div><Link className="bg-green-500 rounded-2xl text-1xl font-bold py-2 px-3  hover:bg-green-700">add to cart</Link></div>
                    <div><Link to={`/detail/${product.id}`} className="bg-orange-400 rounded-2xl text-1xl font-bold py-2 px-3  hover:bg-orange-700">more details</Link></div>
                </div>

            </div>
        </>
    )
}
export default DisplayDiv