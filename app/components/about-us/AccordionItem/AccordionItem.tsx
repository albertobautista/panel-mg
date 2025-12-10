"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  open: boolean;
  onClick: () => void;
}

export default function AccordionItem({
  title,
  content,
  open,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden cursor-pointer">
      {/* HEADER */}
      <button
        onClick={onClick}
        className="w-full flex justify-between font-montserrat items-center px-5 py-4 text-left text-red font-semibold"
      >
        {title}
        {open ? (
          <Minus className="text-red" size={20} />
        ) : (
          <Plus className="text-red" size={20} />
        )}
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-4 text-gray-700 leading-relaxed font-montserrat"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
