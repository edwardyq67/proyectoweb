import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_DMru0Gpx.mjs';
import 'piccolore';
/* empty css                                */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function LoginForm() {
  const [usuario, setUsuario] = useState("edward");
  const [password, setPassword] = useState("edward123");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error en la autenticación");
      }
      setMessage("✅ Acceso correcto. Redirigiendo...");
      setMessageType("success");
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      localStorage.setItem("user", JSON.stringify(data.user || { usuario }));
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "max-w-md w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-xl p-8 border border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-foreground mb-2", children: "Iniciar Sesión" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Ingresa tus credenciales" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: "Usuario" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: usuario,
            onChange: (e) => setUsuario(e.target.value),
            className: "block w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground transition-colors",
            placeholder: "Usuario",
            required: true,
            disabled: loading
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: "Contraseña" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            className: "block w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground transition-colors",
            placeholder: "Contraseña",
            required: true,
            disabled: loading
          }
        )
      ] }),
      message && /* @__PURE__ */ jsx("div", { className: `p-3 text-sm rounded-lg animate-fade-in ${messageType === "success" ? "bg-success/10 border border-success/20 text-success" : "bg-destructive/10 border border-destructive/20 text-destructive"}`, children: message }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-primary hover:bg-primary-600 text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-colors mt-4 disabled:opacity-50",
          children: loading ? "Verificando..." : "Entrar"
        }
      )
    ] })
  ] }) });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center p-4" data-astro-cid-sgpqyurt> ${renderComponent($$result, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/edwar/proyectos/my-project/src/pages/login/Login.jsx", "client:component-export": "default", "data-astro-cid-sgpqyurt": true })} </div> `;
}, "C:/Users/edwar/proyectos/my-project/src/pages/login.astro", void 0);

const $$file = "C:/Users/edwar/proyectos/my-project/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
