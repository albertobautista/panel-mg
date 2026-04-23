import Image from "next/image";
import { InfoBanner } from "../components/about-us/InfoBanner";

export default function Advantages() {
  return (
    <main className="bg-white">
      <section className="flex justify-center overflow-hidden bg-white px-6 pt-6 md:px-20 md:pt-10">
        <div className="relative h-[70vh] w-full sm:h-[85vh] md:h-[95vh] lg:h-[125vh] xl:h-[135vh]">
          <Image
            src="/images/why-is-better/image-1.webp"
            alt="Ventajas del sistema MG"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </section>

      <InfoBanner />
    </main>
  );
}
