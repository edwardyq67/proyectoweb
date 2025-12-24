// src/pages/api/history.ts
export const prerender = false;

import type { APIRoute } from "astro";

const API_URL = 'http://localhost:8080/api/v1/history';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ 
          error: `Error de API: ${response.status}` 
        }), 
        { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en history API GET:', error);
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

export const POST: APIRoute = async ({ request }) => {
  try {
    // Obtener el token del header Authorization
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ 
          error: 'Token de autorización requerido' 
        }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Obtener el cuerpo de la solicitud
    const body = await request.json();
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader // Pasar el token al backend
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
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error en history API POST:', error);
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