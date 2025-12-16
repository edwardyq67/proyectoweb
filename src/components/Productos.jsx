import { useState } from "react";
import ProductosData from "../lib/Productos.json";
import {
  FaHome,
  FaBuilding,
  FaFan,
  FaCheck,
  FaCalculator,
  FaArrowRight,
  FaInfoCircle,
} from "react-icons/fa";

const categoriasInfo = {
  "ac-residencial": {
    nombre: "AC Residencial",
    icon: <FaHome />,
    color: "bg-blue-500",
  },
  "ac-comercial": {
    nombre: "AC Comercial",
    icon: <FaBuilding />,
    color: "bg-green-500",
  },
  ventilacion: {
    nombre: "Ventilación",
    icon: <FaFan />,
    color: "bg-purple-500",
  },
};

export default function Productos() {
  const categorias = Object.keys(categoriasInfo);
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);

  const productosFiltrados = ProductosData.productos.filter(
    (p) => p.categoria === categoriaActiva
  );

  return (
    <section className="py-16 bg-white" id="Productos">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Nuestros <span className="text-primary">Productos</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Soluciones en climatización y ventilación
          </p>
        </div>

        {/* CATEGORÍAS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`flex cursor-pointer items-center gap-2 px-6 py-3 rounded-xl font-semibold transition
                ${
                  categoriaActiva === cat
                    ? `${categoriasInfo[cat].color} text-white`
                    : "border border-gray-300 text-gray-700"
                }
              `}
            >
              {categoriasInfo[cat].icon}
              {categoriasInfo[cat].nombre}
            </button>
          ))}
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-56 bg-gray-50 flex items-center justify-center">
                <img
                  src={producto.img}
                  alt={producto.titulo}
                  className="h-full object-contain p-4"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {producto.titulo}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {producto.contenido}
                </p>

                {/* PUNTOS */}
                <div className="space-y-2 mb-5">
                  {producto.puntos.slice(0, 3).map((p, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <FaCheck className="text-primary mt-1" />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>

                {/* BOTÓN */}
                <a
                  href="/contacto"
                  className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90"
                >
                  <FaCalculator />
                  Cotizar
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* INFO */}
        <div className="mt-12 text-center">
          <div className="inline-flex gap-3 items-center bg-blue-50 border border-blue-200 px-6 py-4 rounded-xl">
            <FaInfoCircle className="text-blue-600" />
            <p className="text-blue-700">
              ¿No encuentras lo que buscas?{" "}
              <a href="/contacto" className="font-semibold underline">
                Contáctanos
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
