import { ContactSchema } from "@/app/lib/contact-schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validación con Zod
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Enviar email
    await resend.emails.send({
      from: "contacto@albertobautista.dev",
      to: "dachb101@gmail.com",
      subject: "Nuevo mensaje del formulario de contacto",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><b>Nombre:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Teléfono:</b> ${data.phone}</p>
        <p><b>Empresa:</b> ${data.company}</p>
        <p><b>País:</b> ${data.country}</p>
        <p><b>Industria:</b> ${data.industry}</p>
        <p><b>Mensaje:</b> ${data.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}
