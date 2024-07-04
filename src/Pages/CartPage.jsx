import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
function CartPage() {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center h-96">
        <BsCart4 className="text-red-400 text-7xl mb-4" />
        <h1 className="text-5xl font-bold mb-4">Your Cart is empty</h1>
        <p className="text-xl mb-5">You've not added any item to your cart</p>
        <Link
          to="/products"
          className="text-white bg-orange-500 hover:bg-orange-700 rounded-md px-3 py-2 mt-4"
        >
          Go Back to shop Product
        </Link>
      </div>
    </>
  );
}
export default CartPage;
