import { Link } from "react-router-dom"
function ViewAll(){
    return(
        <>
        <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/products"
          className="block bg-green-500 text-black font-bold text-center py-4 px-6 rounded-xl hover:bg-green-700"
        >
          View All Available Products
        </Link>
      </section>
        </>
    )
}
export default ViewAll