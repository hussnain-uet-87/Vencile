import React from "react";

const Checkout = ({ cart, selectedItems }) => {
  // ✅ Filter only selected items
  const checkoutItems = cart.filter((item) => selectedItems.includes(item.id));

  // ✅ Calculate totals
  const subtotal = checkoutItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const shippingFee = checkoutItems.length * 125;
  const total = subtotal + shippingFee;

  return (
    <div className="mt-12 min-h-screen bg-gray-100 flex flex-col lg:flex-row gap-6 p-6">
      {/* Left - Customer Info */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-[#45553d] mb-4">
          Checkout Information
        </h2>

        {/* Shipping Address */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#45553d] mb-2">
            Shipping Address
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#45553d]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#45553d]"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#45553d] sm:col-span-2"
            />
            <textarea
              placeholder="Full Address"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#45553d] sm:col-span-2"
            />
          </form>
        </div>

        {/* Payment Options */}
        <div className="mb-6">
          <h3 className="font-semibold text-[#45553d] mb-2">Payment Method</h3>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Credit/Debit Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>EasyPaisa / JazzCash</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right - Order Summary */}
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6 h-fit">
        <h2 className="text-lg font-bold text-[#45553d] mb-4">Order Summary</h2>

        {/* Items */}
        <div className="max-h-60 overflow-y-auto mb-4">
          {checkoutItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-3"
            >
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold text-[#45553d]">{item.title}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-[#45553d]">
                Rs. {item.discountedPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>Shipping Fee</span>
          <span>Rs. {shippingFee}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-semibold text-[#45553d]">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>

        {/* Place Order */}
        <button className="w-full mt-4 py-3 rounded-lg bg-[#45553d] text-white font-semibold hover:bg-[#36432f] transition">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
