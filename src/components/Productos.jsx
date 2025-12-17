import { useState, useEffect } from "react";
import serviciosData from "../lib/Nosotros.json";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaCalculator,
  FaArrowRight,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

const categoriasInfo = {
  Domestico: {
    nombre: "Residencial",
    icon: <FaHome />,
    color: "bg-blue-500",
    descripcion: "Soluciones para hogares y residencias"
  },
  Comercial: {
    nombre: "Comercial",
    icon: <FaBuilding />,
    color: "bg-green-500",
    descripcion: "Para negocios, oficinas y establecimientos"
  },
  Industrial: {
    nombre: "Industrial",
    icon: <FaIndustry />,
    color: "bg-purple-500",
    descripcion: "Sistemas para fábricas y plantas industriales"
  },
  Especialistas: {
    nombre: "Especialistas",
    icon: <FaUserTie />,
    color: "bg-red-500",
    descripcion: "Soluciones especializadas por sector"
  }
};

export default function Productos({ servicioSlug = null }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Domestico");
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);
  const [mostrarSeccion, setMostrarSeccion] = useState(false);

  // Calcular qué categorías tienen productos disponibles y si se debe mostrar la sección
  useEffect(() => {
    const calcularCategoriasDisponibles = () => {
      const serviciosFiltrados = servicioSlug 
        ? serviciosData.servicios.filter(s => s.slug === servicioSlug)
        : serviciosData.servicios;
      
      const categoriasConProductos = [];
      let hayProductosEnTotal = false;

      // Verificar cada categoría
      Object.keys(categoriasInfo).forEach(categoriaKey => {
        let tieneProductos = false;
        
        // Revisar todos los servicios filtrados
        for (const servicio of serviciosFiltrados) {
          // Verificar si la categoría existe y tiene datos
          if (categoriaKey === "Especialistas") {
            // Para Especialistas, verificar si existe y tiene items
            if (servicio[categoriaKey] && 
                Array.isArray(servicio[categoriaKey]) && 
                servicio[categoriaKey].length > 0) {
              tieneProductos = true;
              hayProductosEnTotal = true;
              break;
            }
          } else {
            // Para Domestico, Comercial, Industrial
            if (servicio[categoriaKey] && 
                Array.isArray(servicio[categoriaKey]) && 
                servicio[categoriaKey].length > 0) {
              tieneProductos = true;
              hayProductosEnTotal = true;
              break;
            }
          }
        }
        
        if (tieneProductos) {
          categoriasConProductos.push(categoriaKey);
        }
      });

      // Si hay al menos una categoría con productos, mostrar la sección
      setMostrarSeccion(hayProductosEnTotal);
      
      if (categoriasConProductos.length > 0) {
        setCategoriasDisponibles(categoriasConProductos);
        
        // Si la categoría activa no tiene productos, cambiar a la primera disponible
        if (!categoriasConProductos.includes(categoriaActiva)) {
          setCategoriaActiva(categoriasConProductos[0]);
        }
      } else {
        setCategoriasDisponibles([]);
      }
    };

    calcularCategoriasDisponibles();
  }, [servicioSlug, categoriaActiva]);

  // Obtener productos basados en el servicio (si se proporciona) y categoría
  const obtenerProductos = () => {
    if (!mostrarSeccion) return [];
    
    const productos = [];
    
    // Si se proporciona un servicioSlug, filtrar solo ese servicio
    const serviciosFiltrados = servicioSlug 
      ? serviciosData.servicios.filter(s => s.slug === servicioSlug)
      : serviciosData.servicios;
    
    // Recorrer los servicios filtrados
    serviciosFiltrados.forEach(servicio => {
      // Usar la categoría directamente (ya está en mayúscula)
      if (servicio[categoriaActiva] && 
          Array.isArray(servicio[categoriaActiva]) && 
          servicio[categoriaActiva].length > 0) {
        
        const productosCategoria = servicio[categoriaActiva];
        
        // Manejar estructura diferente para Especialistas
        if (categoriaActiva === "Especialistas") {
          productosCategoria.forEach((especialista, index) => {
            productos.push({
              id: `E${index + 1}`,
              nombre: especialista.titulo,
              tipo: "Especialización",
              descripcion: especialista.descripcion,
              servicio: servicio.titulo,
              servicioSlug: servicio.slug,
              servicioImg: servicio.img,
              categoria: ["Consultoría", "Desarrollo de Proyecto"]
            });
          });
        } else {
          // Para Domestico, Comercial, Industrial
          productosCategoria.forEach(producto => {
            productos.push({
              ...producto,
              servicio: servicio.titulo,
              servicioSlug: servicio.slug,
              servicioImg: servicio.img
            });
          });
        }
      }
    });
    
    return productos;
  };

  const productos = obtenerProductos();

  // Si hay un servicio específico, obtener sus datos
  const servicioActual = servicioSlug 
    ? serviciosData.servicios.find(s => s.slug === servicioSlug)
    : null;

  // Si no hay productos en ninguna categoría, no mostrar nada
  if (!mostrarSeccion) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="Productos">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* ENCABEZADO CONDICIONAL - SOLO SE MUESTRA SI HAY PRODUCTOS */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {servicioActual 
              ? `Productos y Servicios de ${servicioActual.titulo}`
              : "Nuestros Productos y Servicios"
            }
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {servicioActual 
              ? "Soluciones especializadas para tu proyecto"
              : "Soluciones especializadas según tu tipo de proyecto"
            }
          </p>
        </div>

        {/* FILTRO DE CATEGORÍAS - SOLO MOSTRAR SI HAY DISPONIBLES */}
        {categoriasDisponibles.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              {categoriasDisponibles.map((categoriaKey) => {
                const info = categoriasInfo[categoriaKey];
                return (
                  <button
                    key={categoriaKey}
                    onClick={() => setCategoriaActiva(categoriaKey)}
                    className={`flex cursor-pointer items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 flex-1 max-w-xs mx-auto sm:mx-0 min-w-[200px]
                      ${categoriaActiva === categoriaKey
                        ? `${info.color} text-white shadow-lg`
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                      }
                    `}
                  >
                    <div className={`p-2 rounded-lg ${categoriaActiva === categoriaKey ? 'bg-white/20' : 'bg-gray-100'}`}>
                      {info.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-bold">{info.nombre}</div>
                      <div className="text-xs opacity-75">{info.descripcion}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div
              key={producto.id || index}
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
                        {categoriaActiva === "Especialistas" ? (
                          <FaUserTie className="text-5xl" />
                        ) : (
                          <FaTools className="text-5xl" />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
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
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
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
                  {categoriaActiva === "Especialistas" ? "Solicitar Consultoría" : "Solicitar Información"}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}