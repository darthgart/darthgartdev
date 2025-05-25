import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function clientEmailTemplate(name: string) {
  return `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 30px auto; border: 1px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #fff; overflow: hidden;">
    <div style="background-color:rgb(35, 35, 35); padding: 20px; text-align: center;">
      <img src="https://drive.google.com/file/d/1rbs12Emht5cFgu__yZOLGqE87uRiv73k/view?usp=drive_link" alt="DARTHGART.dev" style="height: 50px; object-fit: contain;" />
    </div>
    <div style="padding: 30px; color: #333;">
      <h2 style="margin-top: 0; color:rgb(35, 35, 35);">Hola ${name},</h2>
      <p>¡Gracias por ponerte en contacto conmigo!</p>
      <p>He recibido tu mensaje y lo revisaré personalmente muy pronto.</p>
      <p>Me pondré en contacto contigo tan pronto como lea tu mensaje.</p>
      <p>Si tienes cualquier duda o quieres añadir algo más, puedes enviarme un mensaje a <a href='mailto:darthgart.dev@gmail.com'>darthgart.dev@gmail.com</a>.</p>
      <hr style="border:none; border-top:1px solid #eee; margin: 30px 0;" />
      <p>Un saludo,<br /><strong>Edgar Sánchez</strong><br />Desarrollador Full Stack</p>
    </div>
    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #999;">
      &copy; ${new Date().getFullYear()} Darthgart. Todos los derechos reservados.
    </div>
  </div>
  `
}

function adminEmailTemplate(name: string, email: string, message: string) {
  return `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 30px auto; border: 1px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #fff; overflow: hidden;">
    <div style="background-color:rgb(35, 35, 35); padding: 20px; text-align: center;">
      <img src="https://drive.google.com/file/d/1rbs12Emht5cFgu__yZOLGqE87uRiv73k/view?usp=drive_link" alt="DARTHGART.dev" style="height: 50px; object-fit: contain;" />
    </div>
    <div style="padding: 30px; color: #333;">
      <h2 style="margin-top: 0; color:rgb(36, 36, 36);">Nuevo mensaje recibido</h2>
      <p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #ddd;">${message}</p>
      <hr style="border:none; border-top:1px solid #eee; margin: 30px 0;" />
      <p>Por favor revisa el panel de administración para gestionar este mensaje.</p>
    </div>
    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #999;">
      &copy; ${new Date().getFullYear()} Darthgart. Todos los derechos reservados.
    </div>
  </div>
  `
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    // Enviar correo al cliente
    const clientResponse = await resend.emails.send({
      from: 'DARTHGART.dev <contacto@darthgart.dev>',
      to: email,
      subject: `Gracias por contactar, ${name}`,
      replyTo: 'onboarding@resend.dev',
      html: clientEmailTemplate(name)
    })
    console.log('Correo al cliente:', clientResponse);

    // Enviar correo a ti mismo avisando de nuevo mensaje
    const adminResponse = await resend.emails.send({
      from: 'DARTHGART.dev <contacto@darthgart.dev>',
      to: 'darthgart.dev@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      replyTo: 'onboarding@resend.dev',
      html: adminEmailTemplate(name, email, message),
    });
    console.log('Correo al admin:', adminResponse);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
