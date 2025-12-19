import { useState, useEffect } from "react";
import serviciosData from "../lib/Nosotros.json";
import productosData from "../lib/Productos.json";
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
    nombre: "Domestico",
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
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const calcularCategoriasYProductos = () => {
      const productosDeData = productosData.productos || [];

      let productosFiltradosPorCategoria = productosDeData;

      const mapeoCategorias = {
        'aire-acondicionado-climatizacion': 'ac-comercial',
        'refrigeracion-comercial-industrial': 'refrigeracion-industrial',
      };

      if (servicioSlug && mapeoCategorias[servicioSlug]) {
        const categoriaFiltro = mapeoCategorias[servicioSlug];
        productosFiltradosPorCategoria = productosDeData.filter(
          producto => producto.categoria === categoriaFiltro
        );
      }

      setProductosFiltrados(productosFiltradosPorCategoria);

      const serviciosFiltrados = servicioSlug
        ? serviciosData.servicios.filter(s => s.slug === servicioSlug)
        : serviciosData.servicios;

      const categoriasConProductos = [];
      let hayProductosEnTotal = false;

      Object.keys(categoriasInfo).forEach(categoriaKey => {
        let tieneProductos = false;

        for (const servicio of serviciosFiltrados) {
          if (categoriaKey === "Especialistas") {
            if (servicio[categoriaKey] &&
              Array.isArray(servicio[categoriaKey]) &&
              servicio[categoriaKey].length > 0) {
              tieneProductos = true;
              hayProductosEnTotal = true;
              break;
            }
          } else {
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

      if (productosFiltradosPorCategoria.length > 0) {
        hayProductosEnTotal = true;
        if (!categoriasConProductos.includes('Comercial')) {
          categoriasConProductos.push('Comercial');
        }
      }

      setMostrarSeccion(hayProductosEnTotal);

      if (categoriasConProductos.length > 0) {
        setCategoriasDisponibles(categoriasConProductos);

        if (!categoriasConProductos.includes(categoriaActiva)) {
          setCategoriaActiva(categoriasConProductos[0]);
        }
      } else {
        setCategoriasDisponibles([]);
      }
    };

    calcularCategoriasYProductos();
  }, [servicioSlug, categoriaActiva]);

  const obtenerProductos = () => {
    if (!mostrarSeccion) return [];

    // Para categoría Comercial, mostrar productos agrupados por servicio
    if (categoriaActiva === "Comercial" && productosFiltrados.length > 0) {
      const productosAgrupados = {};

      // Primero agrupar los productos por su servicio
      productosFiltrados.forEach((producto, index) => {
        const slugServicio = producto.servicioSlug || "general";
        const nombreServicio = producto.servicio || "General";
        const imgServicio = producto.servicioImg || null;

        if (!productosAgrupados[slugServicio]) {
          productosAgrupados[slugServicio] = {
            servicio: nombreServicio,
            servicioSlug: slugServicio,
            servicioImg: imgServicio,
            productos: []
          };
        }

        productosAgrupados[slugServicio].productos.push({
          id: `P${slugServicio}-${index + 1}`,
          nombre: producto.titulo,
          tipo: "Producto Comercial",
          descripcion: producto.contenido,
          img: producto.img,
          puntos: producto.puntos || [],
          categoria: producto.categoria || [],
          servicio: nombreServicio,
          servicioSlug: slugServicio,
          servicioImg: imgServicio
        });
      });

      // Convertir el objeto agrupado a un array plano para renderizar
      const productosPlanos = [];
      Object.values(productosAgrupados).forEach(grupo => {
        grupo.productos.forEach(producto => {
          productosPlanos.push(producto);
        });
      });

      return productosPlanos;
    }

    const productos = [];
    const serviciosFiltrados = servicioSlug
      ? serviciosData.servicios.filter(s => s.slug === servicioSlug)
      : serviciosData.servicios;

    serviciosFiltrados.forEach(servicio => {
      if (servicio[categoriaActiva] &&
        Array.isArray(servicio[categoriaActiva]) &&
        servicio[categoriaActiva].length > 0) {

        const idsProductos = servicio[categoriaActiva];

        if (categoriaActiva === "Especialistas") {
          idsProductos.forEach((especialista, index) => {
            productos.push({
              id: `E${servicio.slug}-${index + 1}`,
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
          const productosEncontrados = productosData.productos.filter(
            producto => idsProductos.includes(producto.id)
          );

          productosEncontrados.forEach(producto => {
            productos.push({
              ...producto,
              nombre: producto.titulo,
              tipo: `Producto ${categoriaActiva}`,
              servicio: servicio.titulo,
              servicioSlug: servicio.slug,
              servicioImg: servicio.img,
              categoria: producto.categoria || []
            });
          });
        }
      }
    });

    return productos;
  };

  const productos = obtenerProductos();
  const servicioActual = servicioSlug
    ? serviciosData.servicios.find(s => s.slug === servicioSlug)
    : null;

  if (!mostrarSeccion) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="Productos">
      <div className="container mx-auto px-4 max-w-7xl">

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

        {categoriasDisponibles.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              {categoriasDisponibles.map((categoriaKey) => {
                const info = categoriasInfo[categoriaKey];
                return (
                  <button
                    key={categoriaKey}
                    onClick={() => setCategoriaActiva(categoriaKey)}
                    className={`flex cursor-pointer items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 
              /* En móvil: 100% ancho */
              w-full md:w-auto md:flex-1 
              /* Tamaño máximo solo en desktop */
              md:max-w-xs mx-auto sm:mx-0 md:min-w-[200px]
              ${categoriaActiva === categoriaKey
                        ? `${info.color} text-white shadow-lg`
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                      }
            `}
                  >
                    <div className={`p-2 rounded-lg ${categoriaActiva === categoriaKey ? 'bg-white/20' : 'bg-gray-100'}`}>
                      {info.icon}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-bold">{info.nombre}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div
              key={producto.id || index}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out flex flex-col"
            >
              {/* CONTENEDOR DE img CON ALTURA FIJA */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white to-white flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {producto.img ? (
                    <img
                      src={producto.img}
                      alt={producto.nombre || producto.tipo}
                      className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : producto.servicioImg ? (
                    <img
                      src={producto.servicioImg}
                      alt={producto.servicio}
                      className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-40"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-gray-400">
                        {categoriaActiva === "Especialistas" ? (
                          <FaUserTie className="text-5xl" />
                        ) : (
                          <FaTools className="text-5xl" />
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* CONTENIDO - Se expande para llenar el espacio restante */}
              <div className="p-6 flex flex-col flex-grow">
                {!servicioActual && producto.servicio !== "General" && (
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {producto.servicio}
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {producto.tipo}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {producto.nombre.toUpperCase() || producto.tipo.toUpperCase()}
                </h3>

                {producto.puntos && producto.puntos.length > 0 && (
                  <div className="mb-4 flex-grow">
                    <ul className="space-y-1">
                      {producto.puntos.slice(0, 3).map((punto, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span className="line-clamp-2">{punto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                <a
                  href="/contacto"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:gap-3 mt-auto"
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