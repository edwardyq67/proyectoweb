// src/pages/api/carrusel.js
import carruselData from '../../lib/carrusel.json';

export async function GET() {
  return new Response(JSON.stringify(carruselData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
    }
  });
}