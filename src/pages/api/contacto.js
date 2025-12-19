export async function GET() {
  // ESTO es lo que quieres ver
  console.log('🔑 RESEND_API_KEY:', import.meta.env.RESEND_API_KEY);
  
  return new Response(JSON.stringify({
    mensaje: 'Mira la TERMINAL de tu servidor (donde ejecutas npm run dev)',
    keyExiste: !!import.meta.env.RESEND_API_KEY,
    primerosCaracteres: import.meta.env.RESEND_API_KEY 
      ? import.meta.env.RESEND_API_KEY.substring(0, 10) + '...' 
      : 'NO EXISTE'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}