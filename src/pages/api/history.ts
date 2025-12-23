// src/pages/api/history.ts
export const prerender = false;

import type { APIRoute } from "astro";
export  const API_URL = 'http://localhost:8080/api/v1/history';
 
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
    console.error('Error en history API:', error);
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
export const POST: APIRoute = async () => {
  const API_URL = 'http://localhost:8080/api/v1/history';
  
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
    console.error('Error en history API:', error);
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