/**
 * Módulo Mashup: integra un servicio externo de correo (Resend API)
 * con la API propia de autenticación de Ruba Studio.
 *
 * Documentación del proveedor: https://resend.com/docs/api-reference/emails/send-email
 *
 * Este servicio se dispara de forma NO bloqueante junto al login (Promise.all
 * o "fire and forget" con captura de errores), para no retrasar la respuesta
 * de autenticación si el proveedor externo tarda o falla.
 */

interface NotificacionLoginParams {
  destinatario: string;
  nombre?: string;
}

interface ResendResponse {
  id?: string;
  error?: { message: string };
}

const RESEND_API_URL = 'https://api.resend.com/emails';

/**
 * Envía un correo de notificación de inicio de sesión.
 * Nunca lanza hacia arriba: si el proveedor externo falla, se registra
 * el error y se retorna { enviado: false } para que el flujo de login
 * (fuente propia) no se vea afectado por una fuente externa caída.
 */
export async function enviarNotificacionLogin(
  params: NotificacionLoginParams
): Promise<{ enviado: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const remitente = process.env.MAIL_FROM || 'RubaStudio <onboarding@resend.dev>';

  if (!apiKey) {
    console.warn('[mail.service] RESEND_API_KEY no configurada; se omite el envío.');
    return { enviado: false, error: 'RESEND_API_KEY no configurada.' };
  }

  try {
    const resp = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: remitente,
        to: ['2402101@utrivieramaya.edu.mx'],
        subject: 'Nuevo inicio de sesión en Ruba Studio',
        html: `<p>Hola ${params.nombre || ''},</p><p>Detectamos un nuevo inicio de sesión en tu cuenta de <strong>Ruba Studio</strong>. Si no fuiste tú, cambia tu contraseña de inmediato.</p>`,
      }),
    });

    const data = (await resp.json()) as ResendResponse;

    if (!resp.ok) {
      console.error('[mail.service] Error del proveedor externo:', data.error?.message);
      return { enviado: false, error: data.error?.message || 'Error desconocido del proveedor.' };
    }

    return { enviado: true };
  } catch (error: any) {
    console.error('[mail.service] Fallo de red al contactar la API externa:', error.message);
    return { enviado: false, error: error.message };
  }
}