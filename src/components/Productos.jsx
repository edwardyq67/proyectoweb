import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaArrowRight,
  FaTools,
  FaUserTie,
  FaWhatsapp
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

// Componente memoizado para ProductoCard
const ProductoCard = memo(({ producto, categoriaActiva, servicioActual }) => {
  const generarMensajeWhatsApp = useCallback((producto) => {
    let mensaje = `Hola, estoy interesado en obtener información sobre:\n\n`;
    
    mensaje += `📋 *Producto/Servicio:* ${producto.nombre}\n`;
    mensaje += `🏷️ *Tipo:* ${producto.tipo}\n`;
    
    if (producto.servicio && producto.servicio !== "General") {
      mensaje += `🔧 *Servicio relacionado:* ${producto.servicio}\n`;
    }
    
    if (producto.descripcion) {
      mensaje += `\n📝 *Descripción:*\n${producto.descripcion.substring(0, 100)}...\n`;
    }
    
    if (producto.puntos && producto.puntos.length > 0) {
      mensaje += `\n✅ *Características destacadas:*\n`;
      producto.puntos.slice(0, 3).forEach(punto => {
        mensaje += `• ${punto.substring(0, 50)}\n`;
      });
    }
    
    mensaje += `\n📍 *Categoría:* ${categoriaActiva}\n`;
    mensaje += `\nPor favor, envíenme más información y una cotización.`;
    
    return encodeURIComponent(mensaje);
  }, [categoriaActiva]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out flex flex-col h-full"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white flex-shrink-0">
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
                  <FaUserTie className="text-3xl sm:text-4xl md:text-5xl" />
                ) : (
                  <FaTools className="text-3xl sm:text-4xl md:text-5xl" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-2 sm:mb-3">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block">
            {producto.tipo}
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {producto.nombre.toUpperCase() || producto.tipo.toUpperCase()}
        </h3>

        {producto.puntos && producto.puntos.length > 0 && (
          <div className="mb-3 sm:mb-4 flex-grow">
            <ul className="space-y-1">
              {producto.puntos.slice(0, 3).map((punto, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span>
                  <span className="line-clamp-2">{punto}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {producto.categoria && producto.categoria.length > 0 && (
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {producto.categoria.slice(0, 3).map((cat, idx) => (
                <span
                  key={idx}
                  className="text-[10px] sm:text-xs bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        <a
          href={`https://wa.me/51912909920?text=${generarMensajeWhatsApp(producto)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:gap-3 mt-auto text-sm sm:text-base"
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          <span className="hidden xs:inline">Consultar por WhatsApp</span>
          <span className="xs:hidden">WhatsApp</span>
          <FaArrowRight className="hidden sm:block group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </motion.div>
  );
});

ProductoCard.displayName = 'ProductoCard';

const Productos = memo(({ servicioSlug = null }) => {
  const [categoriaActiva, setCategoriaActiva] = useState("Domestico");
  const [categoriasDisponibles, setCategoriasDisponibles] = useState([]);
  const [mostrarSeccion, setMostrarSeccion] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [serviciosData, setServiciosData] = useState(null);
  const [productosData, setProductosData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar datos desde API
  useEffect(() => {
    const loadData = async () => {
      try {
        const [serviciosRes, productosRes] = await Promise.all([
          fetch('/api/nosotros'),
          fetch('/api/productos')
        ]);
        
        const servicios = await serviciosRes.json();
        const productos = await productosRes.json();
        
        setServiciosData(servicios);
        setProductosData(productos);
        setLoading(false);
      } catch (error) {
        console.error('Error cargando datos:', error);
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Calcular categorías y productos
  const calcularCategoriasYProductos = useCallback(() => {
    if (!serviciosData || !productosData) return;

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
  }, [servicioSlug, categoriaActiva, serviciosData, productosData]);

  useEffect(() => {
    if (!loading) {
      calcularCategoriasYProductos();
    }
  }, [calcularCategoriasYProductos, loading]);

  // Obtener productos
  const obtenerProductos = useCallback(() => {
    if (!mostrarSeccion || !serviciosData || !productosData) return [];

    if (categoriaActiva === "Comercial" && productosFiltrados.length > 0) {
      const productosAgrupados = {};

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
  }, [mostrarSeccion, categoriaActiva, productosFiltrados, servicioSlug, serviciosData, productosData]);

  const productos = useMemo(() => {
    return obtenerProductos();
  }, [obtenerProductos]);

  const renderCategorias = useMemo(() => {
    return categoriasDisponibles.map((categoriaKey) => {
      const info = categoriasInfo[categoriaKey];
      return (
        <button
          key={categoriaKey}
          onClick={() => setCategoriaActiva(categoriaKey)}
          className={`flex cursor-pointer items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all transform hover:scale-105 
            w-full sm:w-auto sm:flex-1 
            sm:max-w-xs mx-auto sm:mx-0 sm:min-w-[180px] md:min-w-[200px]
            ${categoriaActiva === categoriaKey
              ? `${info.color} text-white shadow-lg`
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            }`}
        >
          <div className={`p-1.5 sm:p-2 rounded-lg ${categoriaActiva === categoriaKey ? 'bg-white/20' : 'bg-gray-100'}`}>
            {info.icon}
          </div>
          <div className="text-left flex-1">
            <div className="font-bold text-sm sm:text-base">{info.nombre}</div>
          </div>
        </button>
      );
    });
  }, [categoriasDisponibles, categoriaActiva]);

  const renderProductos = useMemo(() => {
    return productos.map((producto, index) => (
      <ProductoCard
        key={producto.id || index}
        producto={producto}
        categoriaActiva={categoriaActiva}
        servicioActual={servicioSlug && serviciosData ? serviciosData.servicios.find(s => s.slug === servicioSlug) : null}
      />
    ));
  }, [productos, categoriaActiva, servicioSlug, serviciosData]);

  if (loading) {
    return (
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="h-8 sm:h-10 w-48 sm:w-64 bg-gray-200 rounded-lg animate-pulse mx-auto mb-3 sm:mb-4"></div>
            <div className="h-5 sm:h-6 w-64 sm:w-96 bg-gray-200 rounded-lg animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-80 sm:h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!mostrarSeccion) {
    return null;
  }

  const servicioActual = servicioSlug && serviciosData
    ? serviciosData.servicios.find(s => s.slug === servicioSlug)
    : null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white" id="Productos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            {servicioActual
              ? `Productos y Servicios de ${servicioActual.titulo}`
              : "Nuestros Productos y Servicios"
            }
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {servicioActual
              ? "Soluciones especializadas para tu proyecto"
              : "Soluciones especializadas según tu tipo de proyecto"
            }
          </p>
        </div>

        {categoriasDisponibles.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
              {renderCategorias}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {renderProductos}
        </div>
      </div>
    </section>
  );
});

Productos.displayName = 'Productos';

export default Productos;