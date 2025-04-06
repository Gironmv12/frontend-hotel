import { useState, useEffect } from "react";
import { getHabitaciones } from "../api/ApiHabitaciones";
import { BedDouble, Ruler, Star } from "lucide-react";

function HabitacionComponents() {
  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const data = await getHabitaciones();
        setHabitaciones(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHabitaciones();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {habitaciones.map((habitacion, index) => {

        const tipoCama =
          habitacion.id_tipo_cama_tipos_cama?.nombre_tipo ||
          habitacion.id_tipo_cama;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src="public/images/cama-king.jpg"
              alt={`Habitación ${tipoCama}`}
              className="w-full h-80 md:h-96 object-cover"
              />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Habitación {habitacion.calidad_habitacion}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    habitacion.estado_habitacion === "Disponible"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {habitacion.estado_habitacion}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <BedDouble className="w-5 h-5 mr-2" />
                  <span>{habitacion.no_camas} camas</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ruler className="w-5 h-5 mr-2" />
                  <span>{habitacion.tamano_habitacion}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Calidad {habitacion.calidad_habitacion}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-2xl font-bold text-gray-900 mb-4">
                  ${parseFloat(habitacion.precio_habitacion).toFixed(2)}{" "}
                  <span className="text-sm font-normal text-gray-600">
                    / noche
                  </span>
                </div>
                <button
                  onClick={() => navigate("/room-selection")}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HabitacionComponents;
