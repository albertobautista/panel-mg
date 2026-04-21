import Image from "next/image";
import { InfoBanner } from "../components/about-us/InfoBanner";

export default function Advantages() {
  return (
    <main className="bg-white">
      <section className="flex justify-center overflow-hidden bg-white px-6 pt-6 md:px-20 md:pt-10">
        <div className="relative h-screen w-full md:w-auto md:min-w-[56.25vh] md:max-w-[177.78vh] md:aspect-video">
          <Image
            src="/images/home/advantages/image-1.webp"
            alt="Ventajas del sistema MG"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <InfoBanner />
    </main>
  );
}
