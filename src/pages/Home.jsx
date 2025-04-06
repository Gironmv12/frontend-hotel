import React from 'react'
import { BedDouble, CalendarDays, Users } from 'lucide-react'
import HabitacionComponents from '../components/HabitacionComponents'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className="relative">
        {/* Hero Section */}
        <div 
          className="h-[600px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(/images/banner.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Bienvenido a Hotel Solara Inn</h1>
              <p className="text-xl mb-8">Descubre el lujo y la comodidad en cada habitación</p>
              <button
                onClick={() => navigate('/room-selection')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Iniciar Reserva
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '-5rem' }}>
        <div className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <BedDouble className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Habitaciones Lujosas</h3>
              <p className="text-gray-600">Diferentes tipos de camas para tu comodidad</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CalendarDays className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Reserva Flexible</h3>
              <p className="text-gray-600">Elige las fechas que mejor te convengan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Para Todos</h3>
              <p className="text-gray-600">Capacidad para familias y grupos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Habitaciones</h2>
          <HabitacionComponents />
      </div>
    </div>
  )
}

export default Home