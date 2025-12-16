import { useState } from "react";
import serviciosData from "../lib/Nosotros.json";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaCalculator,
  FaArrowRight,
  FaTools,
  FaFilter,
} from "react-icons/fa";

const categoriasInfo = {
  domestico: {
    nombre: "Residencial",
    icon: <FaHome />,
    color: "bg-blue-500",
    descripcion: "Soluciones para hogares y residencias"
  },
  comercial: {
    nombre: "Comercial",
    icon: <FaBuilding />,
    color: "bg-green-500",
    descripcion: "Para negocios, oficinas y establecimientos"
  },
  industrial: {
    nombre: "Industrial",
    icon: <FaIndustry />,
    color: "bg-purple-500",
    descripcion: "Sistemas para fábricas y plantas industriales"
  }
};

export default function Productos({ servicioSlug = null }) {
  const [categoriaActiva, setCategoriaActiva] = useState("domestico");

  // Obtener productos basados en el servicio (si se proporciona) y categoría
  const obtenerProductos = () => {
    const productos = [];
    
    // Si se proporciona un servicioSlug, filtrar solo ese servicio
    const serviciosFiltrados = servicioSlug 
      ? serviciosData.servicios.filter(s => s.slug === servicioSlug)
      : serviciosData.servicios;
    
    // Recorrer los servicios filtrados
    serviciosFiltrados.forEach(servicio => {
      // Convertir primera letra a mayúscula para coincidir con la propiedad
      const propiedadCategoria = categoriaActiva.charAt(0).toUpperCase() + categoriaActiva.slice(1);
      
      if (servicio[propiedadCategoria]) {
        const productosCategoria = servicio[propiedadCategoria];
        productosCategoria.forEach(producto => {
          productos.push({
            ...producto,
            servicio: servicio.titulo,
            servicioSlug: servicio.slug,
            servicioImg: servicio.img
          });
        });
      }
    });
    
    return productos;
  };

  const productos = obtenerProductos();

  // Si hay un servicio específico, obtener sus datos
  const servicioActual = servicioSlug 
    ? serviciosData.servicios.find(s => s.slug === servicioSlug)
    : null;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="Productos">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* ENCABEZADO CONDICIONAL */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {servicioActual 
              ? `Productos de ${servicioActual.titulo}`
              : "Nuestros Productos"
            }
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {servicioActual 
              ? "Soluciones especializadas para tu proyecto"
              : "Soluciones especializadas según tu tipo de proyecto"
            }
          </p>
        </div>

        {/* FILTRO DE CATEGORÍAS */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {Object.entries(categoriasInfo).map(([key, info]) => (
              <button
                key={key}
                onClick={() => setCategoriaActiva(key)}
                className={`flex cursor-pointer items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex-1 max-w-xs mx-auto sm:mx-0
                  ${categoriaActiva === key
                    ? `${info.color} text-white shadow-lg`
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  }
                `}
              >
                <div className={`p-2 rounded-lg ${categoriaActiva === key ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {info.icon}
                </div>
                <div className="text-left">
                  <div className="font-bold">{info.nombre}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTOS */}
        {productos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out"
              >
                {/* IMAGEN CON EFECTO HOVER */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute inset-0">
                    {producto.imagen ? (
                      <img
                        src={producto.imagen}
                        alt={producto.nombre || producto.tipo}
                        className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                    ) : producto.servicioImg ? (
                      <img
                        src={producto.servicioImg}
                        alt={producto.servicio}
                        className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-out opacity-40"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-gray-300">
                          <FaTools className="text-5xl" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                  </div>
                </div>

                {/* CONTENIDO */}
                <div className="p-6">
                  <div className="grid">
                    
                  </div>
                  {/* SERVICIO (solo si hay múltiples servicios) */}
                  {!servicioActual && (
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {producto.servicio}
                      </span>
                    </div>
                  )}

                  {/* TIPO DE PRODUCTO */}
                  <div className="mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      {producto.tipo}
                    </span>
                  </div>

                  {/* NOMBRE */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {producto.nombre || producto.tipo}
                  </h3>

                  {/* DESCRIPCIÓN */}
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {producto.descripcion}
                  </p>

                  {/* CATEGORÍAS */}
                  {producto.categoria && producto.categoria.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {producto.categoria.map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BOTÓN DE COTIZACIÓN */}
                  <a
                    href="/contacto"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:gap-3"
                  >
                    <FaCalculator />
                    Solicitar Información
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No hay productos disponibles
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {servicioActual 
                ? `No tenemos productos registrados para ${categoriasInfo[categoriaActiva].nombre.toLowerCase()} en ${servicioActual.titulo}`
                : `No tenemos productos registrados para ${categoriasInfo[categoriaActiva].nombre.toLowerCase()}`
              }
            </p>
            <button
              onClick={() => setCategoriaActiva("domestico")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <FaHome />
              Ver productos residenciales
            </button>
          </div>
        )}

      </div>
    </section>
  );
}