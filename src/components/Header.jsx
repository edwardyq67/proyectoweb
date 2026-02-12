import { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaBox,
  FaPhone,
  FaWhatsapp,
  FaBlog,
  FaPhoneAlt,
  FaChevronRight,
  FaSnowflake,
  FaIndustry,
  FaClipboardCheck,
  FaBars,
  FaTimes
} from "react-icons/fa";
import datosNosotros from "../lib/Nosotros.json";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [currentHash, setCurrentHash] = useState("");

  // Detectar ruta y hash actual
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);

      // Escuchar cambios en el hash
      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const isHomePage = currentPath === "/";

  // Mapeo de iconos usando componentes de react-icons
  const getIconForService = (title) => {
    const iconMap = {
      "Aire acondicionado y climatización": FaSnowflake,
      "Refrigeración comercial e industrial": FaIndustry,
      "Consultoría de desarrollo y ejecución de proyecto": FaClipboardCheck,
      "Servicio especial de cámara frigorífica": FaClipboardCheck
    };
    return iconMap[title] || FaCog;
  };

  // Cerrar/abrir menú móvil
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Verificar si un enlace está activo
  const isLinkActive = (section) => {
    const targetHash = `#${section}`;
    if (isHomePage) {
      return currentHash === targetHash;
    } else {
      return currentPath === `/#${section}` || currentHash === targetHash;
    }
  };

  return (
    <>
      <header className="sticky  top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="flex items-center gap-2 font-bold text-xl transition-transform hover:scale-105"
            >
              <img
                src="/transparenteNegro.png"
                alt="TS Group - Soluciones Integrales"
                width="100"
                height="60"
                className="w-auto h-16"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Navegación Desktop COMPLETA (solo lg+) */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Inicio */}
            <a
              href={isHomePage ? "#Inicio" : "/#Inicio"}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                isHomePage && currentHash === "#Inicio"
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaHome
                className={`w-4 h-4 ${
                  isHomePage && currentHash === "#Inicio"
                    ? "text-primary"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              INICIO
            </a>

            {/* Nosotros */}
            <a
              href={isHomePage ? "#Nosotros" : "/#Nosotros"}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                isLinkActive("Nosotros")
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaInfoCircle
                className={`w-4 h-4 ${
                  isLinkActive("Nosotros")
                    ? "text-primary"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              NOSOTROS
            </a>

            {/* Dropdown Servicios */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground px-3 py-2 rounded-lg hover:bg-accent/50">
                <FaCog className="w-4 h-4 group-hover:text-primary transition-colors" />
                SERVICIOS
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[400px] rounded-xl border bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {datosNosotros.servicios.map((servicio, index) => {
                      const IconComponent = getIconForService(servicio.titulo);
                      const isServiceActive = currentPath.includes(
                        servicio.slug || ""
                      );

                      return (
                        <a
                          key={index}
                          href={`/${servicio.slug || "#"}`}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 hover:shadow-sm ${
                            isServiceActive ? "bg-primary-50 text-primary-700" : ""
                          }`}
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              {servicio.titulo}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1">
                              {servicio.contenido}
                            </div>
                          </div>
                          <FaChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Productos */}
            <a
              href={isHomePage ? "#Productos" : "/#Productos"}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                isLinkActive("Productos")
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaBox
                className={`w-4 h-4 ${
                  isLinkActive("Productos")
                    ? "text-primary"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              PRODUCTOS
            </a>

            {/* Blog */}
            <a
              href="/Blog"
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                currentPath === "/Blog"
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaBlog
                className={`w-4 h-4 ${
                  currentPath === "/blog"
                    ? "text-primary"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              BLOG
            </a>

            {/* Contacto */}
            <a
              href={isHomePage ? "#contacto" : "/#contacto"}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                isLinkActive("contacto")
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaPhone
                className={`w-4 h-4 ${
                  isLinkActive("contacto")
                    ? "text-primary"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              CONTACTO
            </a>
          </nav>

          {/* Navegación Móvil/Tablet (md: hasta lg) - Solo Inicio, Servicios, Blog */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            {/* Inicio */}
            <a
              href={isHomePage ? "#Inicio" : "/#Inicio"}
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                isHomePage && currentHash === "#Inicio"
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaHome className="w-4 h-4" />
              <span className="hidden sm:inline">INICIO</span>
            </a>

            {/* Servicios Dropdown compacto */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground px-3 py-2 rounded-lg hover:bg-accent/50">
                <FaCog className="w-4 h-4" />
                <span className="hidden sm:inline">SERVICIOS</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border bg-white shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top">
                <div className="space-y-2">
                  {datosNosotros.servicios.map((servicio, index) => {
                    const IconComponent = getIconForService(servicio.titulo);
                    const isServiceActive = currentPath.includes(
                      servicio.slug || ""
                    );

                    return (
                      <a
                        key={index}
                        href={`/${servicio.slug || "#"}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 text-sm ${
                          isServiceActive ? "bg-primary-50 text-primary-700" : ""
                        }`}
                      >
                        <IconComponent className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span className="font-medium truncate">
                          {servicio.titulo}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Blog */}
            <a
              href="/Blog"
              className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
                currentPath === "/blog"
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <FaBlog className="w-4 h-4" />
              <span className="hidden sm:inline">BLOG</span>
            </a>
          </nav>

          {/* Botón de menú móvil - AÑADIDO */}
          <div className="flex items-center gap-4">


            {/* Botón de menú hamburguesa */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-accent/50 transition-colors"
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6 text-foreground" />
              ) : (
                <FaBars className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil completo (para md-) */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Encabezado fijo */}
          <div className="flex-shrink-0 p-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Menú</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Cerrar menú"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Contenido con scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="space-y-6">
                {[
                  {
                    section: "Inicio",
                    href: isHomePage ? "#Inicio" : "/#Inicio",
                    icon: FaHome,
                    text: "INICIO",
                  },
                  {
                    section: "Nosotros",
                    href: isHomePage ? "#Nosotros" : "/#Nosotros",
                    icon: FaInfoCircle,
                    text: "NOSOTROS",
                  },
                  {
                    section: "Productos",
                    href: isHomePage ? "#Productos" : "/#Productos",
                    icon: FaBox,
                    text: "PRODUCTOS",
                  },
                  {
                    section: "Blog",
                    href: "/blog",
                    icon: FaBlog,
                    text: "BLOG",
                  },
                  {
                    section: "contacto",
                    href: isHomePage ? "#contacto" : "/#contacto",
                    icon: FaPhone,
                    text: "CONTACTO",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive =
                    item.section === "Blog"
                      ? currentPath === "/blog"
                      : isLinkActive(item.section);
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary-50 text-primary-700"
                          : "hover:bg-primary-50 hover:text-primary-700"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.text}</span>
                    </a>
                  );
                })}

                {/* Servicios móvil */}
                <div className="border-t pt-6">
                  <h3 className="font-bold text-gray-900 mb-4 px-4">SERVICIOS</h3>
                  <div className="space-y-3">
                    {datosNosotros.servicios.map((servicio, index) => {
                      const IconComponent = getIconForService(servicio.titulo);
                      const isServiceActive = currentPath.includes(
                        servicio.slug || ""
                      );
                      return (
                        <a
                          key={index}
                          href={`/${servicio.slug || "#"}`}
                          onClick={closeMobileMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            isServiceActive
                              ? "bg-primary-50 text-primary-700"
                              : "hover:bg-primary-50"
                          }`}
                        >
                          <IconComponent className="w-5 h-5 text-primary-600" />
                          <div>
                            <div className="font-medium text-gray-900">
                              {servicio.titulo}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Botones móvil */}
                <div className="space-y-4 pt-6 border-t">
                  <a
                    href="https://wa.me/51912909920"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={isHomePage ? "#contacto" : "/#contacto"}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90"
                  >
                    <FaPhoneAlt className="w-5 h-5" />
                    CONTÁCTANOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;