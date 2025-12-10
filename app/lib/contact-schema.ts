import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio."),
  email: z.string().email("Ingrese un email válido."),
  phone: z.string().min(5, "Número inválido."),
  company: z.string().min(2, "La empresa es obligatoria."),
  country: z.string().min(2, "El país es obligatorio."),
  industry: z.string().min(2, "La industria es obligatoria."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
  accept: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar la política de privacidad.",
  }),
});

export type ContactFormType = z.infer<typeof ContactSchema>;
