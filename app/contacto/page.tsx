import { ContactForm } from "../components/home/ContactForm";

export default function Contact() {
  return (
    <main className="w-full bg-creama">
      {/* HERO */}
      {/* <section className="w-full px-6 md:px-20 py-24 bg-[#06202d] text-white">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wide text-white/70 mb-2">
            Contáctenos
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Estamos aquí para ayudarle
          </h1>
        </div>
      </section> */}

      {/* FORM */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
