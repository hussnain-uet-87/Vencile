import {React,useState,useEffect} from 'react'
import { ProductsList } from '../constants/ProductsList';
import {Link} from "react-router-dom"
const Cart = ({cart,setCart,selectedItems,setSelectedItems}) => {
   const [shippingFee,setShippingFee ] = useState(0)
   useEffect(()=>{
    setShippingFee(125*selectedItems.length)
   },[selectedItems])

  // ✅ Toggle item selection
  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // ✅ Delete selected items
  const handleDeleteSelected = () => {
    setCart((prev) => prev.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  // ✅ Calculate subtotal only for selected items
  const subtotal = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0);
    const total = subtotal + shippingFee;

  return (
    <div className=" mt-12 flex flex-col lg:flex-row gap-6 p-6">
      {/* Left - Cart Items */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedItems.length === cart.length && cart.length > 0}
              onChange={() =>
                setSelectedItems(
                  selectedItems.length === cart.length
                    ? []
                    : cart.map((item) => item.id)
                )
              }
            />
            <span className="text-[#45553d] font-semibold">
              SELECT ALL ({cart.length} ITEM{cart.length !== 1 && "S"})
            </span>
          </div>
          <button
            onClick={handleDeleteSelected}
            className="text-red-500 font-medium cursor-pointer"
          >
            🗑 Delete All
          </button>
        </div>

        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelect(item.id)}
              />
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold text-[#45553d]">{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-[#45553d] font-bold">
                  Rs. {item.discountedPrice}
                </p>
                <button
                  onClick={() =>
                    setCart((prev) => prev.filter((p) => p.id !== item.id))
                  }
                  className="text-sm cursor-pointer text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in cart.</p>
        )}
      </div>

      {/* Right - Order Summary */}
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-4 h-fit">
        <h2 className="text-lg font-bold text-[#45553d] mb-4">
          Order Summary
        </h2>
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal ({selectedItems.length} items)</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span>Shipping Fee</span>
          <span>Rs. {shippingFee}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-[#45553d]">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>
        <div className="mt-6">
  <Link
    to="/products/checkout"
    disabled={selectedItems.length === 0}
    className="block w-full py-3 rounded-lg bg-[#45553d] text-white font-semibold text-center disabled:opacity-50 hover:bg-[#36432f] transition"
  >
    PROCEED TO CHECKOUT ({selectedItems.length})
  </Link>
</div>

      </div>
    </div>
  );
}

export default Cart