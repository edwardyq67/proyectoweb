// src/pages/api/login.ts
export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  // Usar variable de entorno o valor por defecto
  const API_BASE_URL = import.meta.env.ASTRO_PUBLIC_API_BASE_URL;
  const API_URL = `${API_BASE_URL}user/login`;
  
  try {
    const body = await request.json();
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    
    if (!response.ok) {
      return new Response(
        JSON.stringify({ 
          error: data.error || `Error de API: ${response.status}` 
        }), 
        { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
      }
    });

  } catch (error) {
    console.error('Error en login API:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error interno del servidor' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};