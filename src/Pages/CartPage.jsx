import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../component/Cart";
function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);
  return (
    <>
      <div className="flex-col flex items-center bg-white gap-8 p-10 text-black text-sm">
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md h-24"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-600 font-bold">${item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-300 text-white text-xs font-bold uppercase rounded  focus:outline-none"
                  onClick={() => {
                    addToCart(item);
                    // toast.apply('Item Already Added')
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-300 text-white text-xs font-bold uppercase rounded focus:outline-none"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <button
              className="px-4 py-2 bg-orange-500 hover:bg-orange-300 text-white text-xs font-bold uppercase rounded  focus:outline-none"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <div className="text-center flex flex-col justify-center items-center h-96">
            <BsCart4 className="text-red-400 text-7xl mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is empty</h1>
            <p className="mb-5">
              You've not added any item to your cart
            </p>
            <Link
              to="/products"
              className="text-white bg-orange-500 hover:bg-orange-700 rounded-md px-3 py-2 mt-4"
            >
              Go Back to shop Product
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default CartPage;
