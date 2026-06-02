import Image from "next/image";
import { Photo, Section } from "../data";

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <figure className="group relative overflow-hidden rounded-xl shadow-[0_12px_30px_rgba(13,27,42,.14)]">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={900}
        height={600}
        className="h-56 sm:h-72 md:h-[295px] w-full object-cover transition duration-500 group-hover:scale-105"
      />
      {photo.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-4 pb-3 pt-8 font-montserrat text-[.68rem] font-semibold uppercase tracking-[1px] text-white/90">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionHeader({ eyebrow, title }: Pick<Section, "eyebrow" | "title">) {
  return (
    <>
      <span className="mb-2.5 block font-montserrat text-lg leading-relaxed text-[#0d1b2a]">
        {eyebrow}
      </span>
      <h2 className="mb-4 font-inter text-4xl md:text-5xl font-bold text-blue">
        {title}
      </h2>
      <div className="mb-10 h-[3px] w-9 rounded-sm bg-red-600" />
    </>
  );
}

function TextBlock({
  paragraphs,
  className = "text-[#0d1b2a]",
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div
      className={`space-y-4 font-montserrat text-lg leading-relaxed ${className}`}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function ProcessSection({ section }: { section: Section }) {
  const paragraphs = section.paragraphs ?? [];
  const photos = section.photos ?? [];
  const gridPhotos = section.gridPhotos ?? [];
  const reverse = section.reverse ?? false;
  const hasRow = paragraphs.length > 0 || photos.length > 0;
  const bannerAfterSubsectionTitle = section.bannerAfterSubsectionTitle;

  const banner = section.banner && (
    <div className="mt-12 rounded-2xl bg-[#eeebe3] px-6 py-12 md:px-10">
      <h2 className="mb-4 font-inter text-4xl md:text-5xl font-bold text-[#0d1b2a]">
        {section.banner.title}
      </h2>
      <div className="max-w-[760px] text-[#0d1b2a]">
        <TextBlock
          paragraphs={section.banner.paragraphs}
          className="text-[#0d1b2a]"
        />
      </div>
    </div>
  );

  return (
    <section
      id={section.id}
      className="scroll-mt-24 md:scroll-mt-28 border-b border-slate-200 py-10 sm:py-14 md:py-16 last:border-b-0"
    >
      <SectionHeader eyebrow={section.eyebrow} title={section.title} />

      {hasRow && (
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-[52px]">
          <div className={reverse ? "md:order-2" : ""}>
            <TextBlock paragraphs={paragraphs} />
          </div>
          <div className={reverse ? "md:order-1" : ""}>
            {photos.map((photo) => (
              <PhotoCard key={photo.src} photo={photo} />
            ))}
          </div>
        </div>
      )}

      {section.subsections.map((subsection) => (
        <div key={subsection.title}>
          <div className="mt-8 sm:mt-11 border-t border-slate-200 pt-7 sm:pt-9">
            <h3 className="mb-[18px] border-l-[3px] border-red pl-3 font-montserrat text-lg font-bold text-blue">
              {subsection.title}
            </h3>
            {subsection.photos && subsection.photos.length > 0 ? (
              <div className="grid items-start gap-6 md:grid-cols-2 md:gap-[52px]">
                <div className={subsection.reverse ? "md:order-2" : ""}>
                  <TextBlock paragraphs={subsection.paragraphs} />
                </div>
                <div className={subsection.reverse ? "md:order-1" : ""}>
                  {subsection.photos.map((photo) => (
                    <PhotoCard key={photo.src} photo={photo} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-[800px]">
                <TextBlock paragraphs={subsection.paragraphs} />
              </div>
            )}
          </div>

          {bannerAfterSubsectionTitle === subsection.title && banner}
        </div>
      ))}

      {gridPhotos.length > 0 && (
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {gridPhotos.map((photo) => (
            <PhotoCard key={photo.src} photo={photo} />
          ))}
        </div>
      )}

      {!bannerAfterSubsectionTitle && banner}
    </section>
  );
}
