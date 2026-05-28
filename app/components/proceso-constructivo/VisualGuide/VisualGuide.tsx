import Image from "next/image";

export default function VisualGuide() {
  return (
    <section className="w-full bg-[#eeebe3] px-4 sm:px-6 md:px-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <span className="mb-2.5 block font-montserrat text-xs font-semibold uppercase tracking-[2px] text-gray">
          Referencia visual
        </span>
        <h2 className="mb-4 font-inter text-[clamp(1.55rem,2.4vw,2rem)] font-bold uppercase leading-[1.05] tracking-[-.2px] text-blue">
          Guía Visual del Proceso Constructivo
        </h2>
        <div className="mb-10 h-[3px] w-9 rounded-sm bg-red" />

        <figure className="mx-auto w-full max-w-7xl overflow-hidden rounded-[3px] shadow-[0_8px_36px_rgba(54,53,54,.12)]">
          <Image
            src="/images/proceso-constructivo/visual-guide.jpg"
            alt="Guía visual proceso constructivo Panel MG"
            width={1200}
            height={647}
            className="h-auto w-full object-contain"
            quality={75}
          />
        </figure>
      </div>
    </section>
  );
}
