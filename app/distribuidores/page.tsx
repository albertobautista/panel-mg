"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Distributor, DISTRIBUTORS, STATE_ORDER } from "./data";

const formatTitle = (value: string) =>
  value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const getWebsiteUrl = (web?: string) => {
  if (!web) return "";
  if (web.startsWith("http://") || web.startsWith("https://")) return web;
  return `https://${web}`;
};

const hiddenWebsites = new Set(["", "wa.me", "linktr.ee"]);

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3.5C3 2.7 3.7 2 4.5 2h.8c.4 0 .7.2.9.5L7.4 5c.2.4.1.9-.2 1.2L6.5 7c.5.9 1.6 2 2.5 2.5l.8-.7c.3-.3.8-.4 1.2-.2l2.5 1.2c.3.2.5.5.5.9v.8c0 .8-.7 1.5-1.5 1.5C6.5 13 3 9.5 3 5.5v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 2.5c-1.5 1.5-2 3.5-2 5.5s.5 4 2 5.5M8 2.5c1.5 1.5 2 3.5 2 5.5s-.5 4-2 5.5M2.5 8h11"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray/80"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M10 10L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DistributorCard({ distributor }: { distributor: Distributor }) {
  const showWebsite = distributor.web && !hiddenWebsites.has(distributor.web);

  return (
    <article className="rounded-xl border border-blue/10 bg-white px-[18px] py-4 transition hover:border-red hover:shadow-[0_4px_20px_rgba(169,31,35,0.12)]">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[2.5px] text-red">
        {distributor.city}
      </p>
      <h3 className="mb-2.5 text-[15px] font-semibold leading-snug text-blue">
        {formatTitle(distributor.name)}
      </h3>

      <div className="flex flex-col gap-1.5 text-sm text-gray">
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <a
            href={`tel:${distributor.phone.replace(/\s/g, "")}`}
            className="hover:text-red"
          >
            {distributor.phone}
          </a>
        </div>

        {distributor.colonia ? (
          <div className="flex items-center gap-2">
            <LocationIcon />
            <span>{formatTitle(distributor.colonia)}</span>
          </div>
        ) : null}

        {showWebsite ? (
          <div className="flex min-w-0 items-center gap-2">
            <WebIcon />
            <a
              href={getWebsiteUrl(distributor.web)}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-[12px] text-red hover:underline"
            >
              {distributor.web}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function DistribuidoresPage() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const states = useMemo(() => {
    const foundStates = Array.from(
      new Set(DISTRIBUTORS.map((item) => item.state)),
    );
    return STATE_ORDER.filter((state) => foundStates.includes(state)).concat(
      foundStates.filter((state) => !STATE_ORDER.includes(state)),
    );
  }, []);

  const totalDistributors = DISTRIBUTORS.length;
  const totalStates = states.length;

  const filteredDistributors = useMemo(() => {
    const query = search.trim().toLowerCase();

    return DISTRIBUTORS.filter((distributor) => {
      const matchesState =
        !selectedState || distributor.state === selectedState;
      const matchesSearch =
        !query ||
        [
          distributor.name,
          distributor.city,
          distributor.state,
          distributor.colonia,
          distributor.phone,
          distributor.web,
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query));

      return matchesState && matchesSearch;
    });
  }, [search, selectedState]);

  const groupedByState = useMemo(() => {
    return filteredDistributors.reduce<Record<string, Distributor[]>>(
      (acc, distributor) => {
        acc[distributor.state] = acc[distributor.state] ?? [];
        acc[distributor.state].push(distributor);
        return acc;
      },
      {},
    );
  }, [filteredDistributors]);

  const visibleStates = states.filter((state) => groupedByState[state]?.length);

  return (
    <main className="min-h-screen bg-creama font-sans text-blue">
      <section className="relative flex min-h-[500px] w-full items-center py-12 md:min-h-[620px] md:py-16 lg:min-h-[700px]">
        <Image
          src="/images/distribuidores/hero.webp"
          alt="Distribuidores"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 w-full px-6 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[3px] text-red/80 before:block before:h-0.5 before:w-7 before:bg-red">
              Red Nacional Autorizada
            </div>
            <h1 className="mb-4 font-inter text-4xl font-bold text-white md:text-6xl">
              Distribuidores
              <br />
              <span className="text-red">Panel MG</span>
            </h1>
            <p className="max-w-3xl font-montserrat text-base leading-relaxed text-white/85 md:text-lg lg:text-xl">
              Encuentra tu distribuidor autorizado más cercano. Contamos con
              presencia en los principales estados de la República Mexicana para
              llevar soluciones constructivas hasta ti.
            </p>

            <div className="mt-7 flex flex-wrap gap-8 md:gap-10">
              <div className="border-l-2 border-red pl-3.5">
                <div className="text-3xl font-black leading-none text-white md:text-4xl">
                  {totalDistributors}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[1.5px] text-white/70">
                  Distribuidores
                </div>
              </div>
              <div className="border-l-2 border-red pl-3.5">
                <div className="text-3xl font-black leading-none text-white md:text-4xl">
                  {totalStates}
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[1.5px] text-white/70">
                  Estados
                </div>
              </div>
              <div className="border-l-2 border-red pl-3.5">
                <div className="text-3xl font-black leading-none text-white md:text-4xl">
                  100%
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[1.5px] text-white/70">
                  Autorizados
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/20 bg-black/25 p-4 backdrop-blur-[1px] md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <strong className="mb-1 block text-[17px] font-bold text-white">
                    ¿Quieres ser distribuidor Panel MG?
                  </strong>
                  <p className="max-w-lg text-[13px] leading-6 text-white/75">
                    Únete a nuestra red de distribuidores autorizados y ofrece a
                    tus clientes los mejores sistemas constructivos del mercado.
                  </p>
                </div>
                <a
                  href="https://panelmg.com.mx/contacto"
                  className="w-full rounded-md bg-red px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-red/90 sm:w-auto"
                >
                  Quiero ser distribuidor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-20 border-b-2 border-blue/10 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <label className="relative w-full md:min-w-[220px] md:flex-1">
            <span className="sr-only">Buscar distribuidor</span>
            <SearchIcon />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="search"
              placeholder="Buscar distribuidor, ciudad o estado…"
              className="w-full rounded-md border border-blue/10 bg-creama py-2.5 pl-9 pr-3.5 text-[14px] text-blue outline-none transition placeholder:text-gray/80 focus:border-red"
            />
          </label>

          <select
            value={selectedState}
            onChange={(event) => setSelectedState(event.target.value)}
            className="w-full cursor-pointer rounded-md border border-blue/10 bg-creama px-3.5 py-2.5 text-[14px] text-blue outline-none transition focus:border-red sm:w-auto"
          >
            <option value="">Todos los estados</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <span className="w-full text-right text-sm text-gray/80 sm:ml-auto sm:w-auto sm:whitespace-nowrap">
            Mostrando{" "}
            <strong className="font-medium text-red">
              {filteredDistributors.length}
            </strong>{" "}
            distribuidor{filteredDistributors.length === 1 ? "" : "es"}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-10">
        {filteredDistributors.length ? (
          visibleStates.map((state) => (
            <section key={state} className="mb-10">
              <header className="mb-4 flex items-center gap-2.5 border-b-2 border-blue/10 pb-3">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-red" />
                <h2 className="text-base font-bold uppercase tracking-[2.5px] text-blue">
                  {state}
                </h2>
                <span className="rounded-full border border-blue/10 bg-creama px-2.5 py-0.5 text-[12px] text-gray/80">
                  {groupedByState[state].length} distribuidor
                  {groupedByState[state].length === 1 ? "" : "es"}
                </span>
              </header>

              <div className="grid grid-cols-1 gap-3 min-[440px]:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                {groupedByState[state].map((distributor, index) => (
                  <DistributorCard
                    key={`${distributor.state}-${distributor.city}-${distributor.name}-${index}`}
                    distributor={distributor}
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="py-16 text-center text-base text-gray/80">
            No se encontraron distribuidores con ese criterio.
          </div>
        )}
      </section>

      <section className="relative mt-8 bg-blue">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 py-8 md:px-10">
          <div>
            <strong className="mb-1 block text-[19px] font-bold text-white md:text-[21px]">
              ¿No encuentras un distribuidor cerca de ti?
            </strong>
            <p className="max-w-lg text-[15px] leading-7 text-white/55">
              Contáctanos directamente y te ayudamos a encontrar la solución más
              cercana o te conectamos con nuestro equipo comercial.
            </p>
          </div>
          <a
            href="https://panelmg.com.mx/contacto"
            className="w-full rounded-md bg-red px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-red/90 sm:w-auto"
          >
            Habla con un asesor →
          </a>
        </div>
      </section>
    </main>
  );
}
