import {useState, useEffect } from "react"
import DisplayDiv from "./DisplayDiv"
function Display({home = false}){
    const[display, setDisplay] = useState([])
    useEffect(()=>{
        const fetchCategory = async ()=>{
            const apiUrl = home ? 'https://fakestoreapi.com/products?limit=9':'https://fakestoreapi.com/products'
            try{
            const res = await fetch(apiUrl)
            const data = await res.json()
            setDisplay(data)
            }catch(err){
                console.log('Error fetching data', err);
            }
            
        }
        fetchCategory()
    }, [])
    return(
        <>
            <section className="bg-orange-200 px-4 py-10">
            <div className="container-xl lg:container m-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">
                Products
            </h2>
                <div className="grid  md:grid-cols-3 gap-6 relative">
                    {display.map((product)=>
                        <DisplayDiv key={product.id} product={product}/>
                    )}
                    {/* <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption> */}
                </div>
            
            </div>
            </section>
        </>
    )
}
export default Display