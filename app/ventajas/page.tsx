import Image from "next/image";
import { InfoBanner } from "../components/about-us/InfoBanner";

export default function Advantages() {
  return (
    <main className="bg-white">
      <section className="flex justify-center overflow-hidden bg-white px-6 pt-6 md:px-20 md:pt-10">
        <div className="relative h-[70vh] w-full sm:h-[115vh] md:h-[135vh] lg:h-[170vh] xl:h-[190vh]">
          <Image
            src="/images/why-is-better/image-2.webp"
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
