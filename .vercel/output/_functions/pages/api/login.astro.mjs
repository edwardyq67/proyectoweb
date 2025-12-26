export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const API_BASE_URL = "http://localhost:8080/api/v1/";
  const API_URL = `${API_BASE_URL}user/login`;
  try {
    const body = await request.json();
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error en login API:", error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
