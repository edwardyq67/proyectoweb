// src/pages/api/nosotros.js
import nosotrosData from '../../lib/Nosotros.json';

export async function GET() {
  return new Response(JSON.stringify(nosotrosData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
    }
  });
}