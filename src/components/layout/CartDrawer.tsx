"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const sampleCartItems = [
  {
    id: "1",
    name: "NuPhy Air75 V2",
    price: 149,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1618384852429-e259b09e6904?w=200&q=80",
    variant: "Black / Gateron Red",
  },
  {
    id: "2",
    name: "Grovemade Desk Mat",
    price: 95,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1587829741161-75e44d972ed6?w=200&q=80",
    variant: "Large / Dark Brown",
  },
];

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const total = sampleCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <span className="bg-[#7C3AED] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {sampleCartItems.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {sampleCartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-[#F8F8F7] rounded-2xl p-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
                        <button className="p-1.5 hover:bg-gray-50 rounded-l-lg transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button className="p-1.5 hover:bg-gray-50 rounded-r-lg transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">${item.price}</span>
                        <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#6B7280]">Subtotal</span>
                <span className="text-xl font-bold">${total}</span>
              </div>
              <p className="text-xs text-[#6B7280]">Shipping and taxes calculated at checkout.</p>
              <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-4 rounded-2xl transition-colors duration-200">
                Checkout — ${total}
              </button>
              <button
                onClick={onClose}
                className="w-full border border-gray-200 hover:border-gray-300 text-[#0F0F0F] font-medium py-3 rounded-2xl transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
