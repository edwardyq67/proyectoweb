import React, { useState, useEffect } from 'react';
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

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState('top');
  const [currentPath, setCurrentPath] = useState("/");
  const [currentHash, setCurrentHash] = useState("");

  // Mapeo de iconos para servicios
  const getIconForService = (title) => {
    const iconMap = {
      "Aire acondicionado y climatización": FaSnowflake,
      "Refrigeración comercial e industrial": FaIndustry,
      "Consultoría de desarrollo y ejecución de proyecto": FaClipboardCheck,
      "Servicio especial de cámara frigorífica": FaClipboardCheck
    };
    return iconMap[title] || FaCog;
  };

  // Array de navegación principal
  const menuItems = [
    { name: 'INICIO', href: '#Inicio', icon: FaHome, section: 'Inicio' },
    { name: 'NOSOTROS', href: '#Nosotros', icon: FaInfoCircle, section: 'Nosotros' },
    { name: 'PRODUCTOS', href: '#Productos', icon: FaBox, section: 'Productos' },
    { name: 'BLOG', href: '/Blog', icon: FaBlog, section: 'Blog' },
    { name: 'CONTACTO', href: '#contacto', icon: FaPhone, section: 'contacto' },
  ];

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrollState('scrolled');
      } else {
        setScrollState('top');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar ruta y hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);

      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const isHomePage = currentPath === "/";

  // Determinar clases del header según scroll - MODO BLACK AL HACER SCROLL
  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 h-16";
    return scrollState === 'top'
      ? `${baseClasses} bg-transparent`
      : `${baseClasses} bg-black/90 backdrop-blur-md shadow-sm`; // Cambiado a black/90
  };

  // Determinar color del texto según scroll
  const getTextColor = () => {
    return scrollState === 'top' ? 'text-white' : 'text-white'; // Ambos estados texto blanco
  };

  // Verificar si un enlace está activo
  const isLinkActive = (section) => {
    if (section === "Blog") {
      return currentPath === "/Blog";
    }
    const targetHash = `#${section}`;
    if (isHomePage) {
      return currentHash === targetHash;
    } else {
      return currentPath === `/#${section}` || currentHash === targetHash;
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Renderizar items de navegación desktop
  const renderDesktopNavItems = () => {
    return menuItems.map((item) => {
      const IconComponent = item.icon;
      const isActive = isLinkActive(item.section);
      const href = isHomePage && item.href.startsWith('#')
        ? item.href
        : item.href.startsWith('#')
          ? `/${item.href}`
          : item.href;

      return (
        <a
          key={item.name}
          href={href}
          className={`text-sm font-semibold transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${
            isActive
              ? "text-primary bg-primary/20" // Fondo más visible sobre negro
              : `${getTextColor()} hover:text-primary hover:bg-white/10`
          }`}
        >
          <IconComponent className="w-4 h-4" />
          {item.name}
        </a>
      );
    });
  };

  return (
    <>
      <header className={getHeaderClasses()}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/teknisolution.png"
                alt="TS Group - Soluciones Integrales"
                width="100"
                height="60"
                className="w-auto h-16"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-6">
              {renderDesktopNavItems()}

              {/* Dropdown Servicios */}
              <div className="relative group">
                <button className={`flex items-center gap-2 text-sm font-semibold transition-colors ${getTextColor()} hover:text-primary px-3 py-2 rounded-lg hover:bg-white/10`}>
                  <FaCog className="w-4 h-4" />
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
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 rounded-xl bg-black/90 backdrop-blur-md shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top border border-gray-800">
                  {datosNosotros.servicios.map((servicio, index) => {
                    const IconComponent = getIconForService(servicio.titulo);
                    return (
                      <a
                        key={index}
                        href={`/${servicio.slug || "#"}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-white"
                      >
                        <IconComponent className="w-5 h-5 text-primary-400" />
                        <span className="text-sm font-medium">{servicio.titulo}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Botón menú móvil */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-white/10"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-black shadow-xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header del menú móvil */}
          <div className="flex-shrink-0 p-6 border-b border-gray-800">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-white">Menú</span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-white/10 text-white"
                aria-label="Cerrar menú"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Contenido del menú móvil */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="space-y-6">
                {/* Items del menú principal */}
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = isLinkActive(item.section);
                  const href = isHomePage && item.href.startsWith('#')
                    ? item.href
                    : item.href.startsWith('#')
                      ? `/${item.href}`
                      : item.href;

                  return (
                    <a
                      key={item.name}
                      href={href}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  );
                })}

                {/* Sección Servicios en móvil */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="font-bold text-white mb-4 px-4 flex items-center gap-2">
                    <FaCog className="w-5 h-5" />
                    SERVICIOS
                  </h3>
                  <div className="space-y-2">
                    {datosNosotros.servicios.map((servicio, index) => {
                      const IconComponent = getIconForService(servicio.titulo);
                      return (
                        <a
                          key={index}
                          href={`/${servicio.slug || "#"}`}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-white"
                        >
                          <IconComponent className="w-5 h-5 text-primary-400" />
                          <span className="text-sm font-medium">{servicio.titulo}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Botones de acción móvil */}
                <div className="space-y-4 pt-6 border-t border-gray-800">
                  <a
                    href="https://wa.me/51912909920"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={isHomePage ? "#contacto" : "/#contacto"}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors"
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
}

export default Header;