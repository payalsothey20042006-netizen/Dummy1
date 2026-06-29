import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition ease-in-out duration-300">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="px-4 py-6 sm:px-6 bg-slate-900 text-white flex items-center justify-between">
              <h2 className="text-xl font-bold">Shopping Cart ({totalItems})</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 px-4 py-6 sm:px-6 overflow-y-auto">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <p className="text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.product.id} className="flex py-2 border-b border-gray-100">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="line-clamp-2 pr-2">{item.product.name}</h3>
                            <p className="ml-4 font-bold text-blue-600 whitespace-nowrap">
                              ${(item.product.numericPrice * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.product.price} each</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1 font-medium text-gray-900 border-x border-gray-200">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            className="font-medium text-red-500 hover:text-red-700 flex items-center transition-colors p-1"
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-gray-50">
                <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <button
                    className="w-full flex items-center justify-center rounded-xl border border-transparent bg-slate-900 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-slate-800 transition-colors"
                  >
                    Checkout
                  </button>
                </div>
                <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{' '}
                    <button
                      type="button"
                      className="font-medium text-blue-600 hover:text-blue-500"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
