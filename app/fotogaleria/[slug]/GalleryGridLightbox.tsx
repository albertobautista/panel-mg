"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

interface GalleryGridLightboxProps {
  title: string;
  images: string[];
}

export default function GalleryGridLightbox({
  title,
  images,
}: GalleryGridLightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => images.map((src) => ({ src })), [images]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {images.map((src, imageIndex) => (
          <button
            key={src}
            type="button"
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
            className="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white p-[3px] text-left shadow-[0_8px_24px_rgba(13,27,42,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(13,27,42,.22)] md:rounded-2xl md:p-1 md:shadow-[0_12px_36px_rgba(13,27,42,.16)]"
            aria-label={`Abrir imagen ${imageIndex + 1} de ${title}`}
          >
            <span className="relative block h-full w-full overflow-hidden rounded-lg bg-slate-100 md:rounded-xl">
              <Image
                src={src}
                alt={`${title} ${imageIndex + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0d1b2a]/35 via-transparent to-transparent" />
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: nextIndex }) => setIndex(nextIndex) }}
        styles={{
          container: {
            backgroundColor: "rgba(13, 27, 42, 0.82)",
          },
        }}
      />
    </>
  );
}
