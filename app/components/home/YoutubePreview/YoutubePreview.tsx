"use client";

interface YoutubePreviewProps {
  url: string;
  title?: string;
}

function getYoutubeEmbedId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }
    if (
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1];
      }
    }
  } catch {
    return null;
  }
  return null;
}

export default function YoutubePreview({ url, title }: YoutubePreviewProps) {
  const embedId = getYoutubeEmbedId(url);

  if (!embedId) return null;

  return (
    <section className="w-full bg-creama pb-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold font-inter text-[#0d1b2a] mb-2">
              {title}
            </h2>
            <div className="w-40 h-[3px] bg-red"></div>
          </div>
        )}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}`}
            title={title ?? "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
