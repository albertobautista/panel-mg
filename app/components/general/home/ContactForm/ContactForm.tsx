"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ContactFormType, ContactSchema } from "@/app/lib/contact-schema";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Enviado con éxito");
        reset();
      } else {
        toast.error("Ocurrió un error al enviar el mensaje");
      }
    } catch (error) {
      toast.error("No se pudo enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-gray-500 font-inter text-md">
            Contáctenos
          </p>

          <h2 className="text-4xl font-inter font-bold text-[#0d1b2a] mt-2">
            Estamos aquí para ayudarle
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CAMPOS */}
            <div>
              <label className="text-md font-medium font-inter text-black">
                Nombre y apellido
              </label>
              <input
                {...register("name")}
                placeholder="Su nombre y apellido"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium font-inter text-black">
                Email
              </label>
              <input
                {...register("email")}
                placeholder="Su email corporativo"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium font-inter text-black">
                Teléfono móvil
              </label>
              <input
                {...register("phone")}
                placeholder="Número de teléfono"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium font-inter text-black">
                Empresa
              </label>
              <input
                {...register("company")}
                placeholder="Nombre de tu empresa"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium font-inter text-black">
                País
              </label>
              <input
                {...register("country")}
                placeholder="País donde se encuentra"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="text-md font-medium font-inter text-black">
                Industria / sector
              </label>
              <input
                {...register("industry")}
                placeholder="Industria / sector"
                className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3"
              />
              {errors.industry && (
                <p className="text-red-500 text-sm">
                  {errors.industry.message}
                </p>
              )}
            </div>
          </div>

          {/* MENSAJE */}
          <div>
            <label className="text-md font-medium font-inter text-black">
              Mensaje
            </label>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Ej: Quiero saber más de..."
              className="mt-2 w-full rounded-md bg-gray-100 text-black px-4 py-3 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* CHECKBOX */}
          <div className="flex items-start gap-3">
            <input type="checkbox" {...register("accept")} className="mt-1" />
            <p className="text-md text-black font-montserrat">
              Acepto el tratamiento de mis datos y la política de privacidad
            </p>
          </div>
          {errors.accept && (
            <p className="text-red-500 text-sm">{errors.accept.message}</p>
          )}

          {/* BOTÓN CON LOADER */}
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue font-montserrat text-white rounded-md font-medium hover:bg-[#122b40] transition flex items-center gap-3"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
