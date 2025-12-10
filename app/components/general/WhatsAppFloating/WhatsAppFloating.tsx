import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  return (
    <Link
      href="https://wa.me/523336745257" // <-- Cambia tu número aquí
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white w-18 h-18 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={42} />
      </div>
    </Link>
  );
}
