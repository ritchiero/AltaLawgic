"use client"

import { useState, useCallback, useRef } from "react"
import { User, Settings, Briefcase, Gift, Users, Book, Brain, ChartLine, Zap, ChevronRight, Phone, ChevronDown, Calendar, Bell, Mail, Star, MessageCircle, Gavel, Shield, HardHat, Building, Scale, Globe, Calculator, Leaf, Home, Copyright, Wifi, Target, Landmark, Umbrella, Heart, Dumbbell, Plane, Anchor, FileText, Stamp, Sparkles, Hand, Flag, Eye, Sprout } from "lucide-react"
import CactusIcon from './components/CactusIcon';
import SparksIcon from './components/SparksIcon'; // Añade esta línea
import ReactConfetti from 'react-confetti'

// Definimos las clases de fuente personalizadas para Plus Jakarta Sans
const fontClasses = {
  normal: "plus-jakarta-sans-normal",
  medium: "plus-jakarta-sans-medium",
  semibold: "plus-jakarta-sans-semibold",
  bold: "plus-jakarta-sans-bold",
  extrabold: "plus-jakarta-sans-extrabold" // Añadimos esta nueva clase
}

function RegistrationForm({ onContinue }: { onContinue: (data: any) => void }) {
  const inputClasses = `w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${fontClasses.normal} text-gray-700 bg-gray-50`;
  const selectClasses = `w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${fontClasses.normal} appearance-none bg-gray-50 text-gray-700`;
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onContinue(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <h1 className={`text-2xl mb-6 text-gray-900 ${fontClasses.bold}`}>Alta de usuario Lawgic Plan Anual 2025</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="fullName" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Nombre completo</label>
          <div className="relative">
            <input id="fullName" placeholder="Juan Pérez" required className={inputClasses} value={formData.fullName} onChange={handleChange} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Correo electrónico</label>
          <div className="relative">
            <input id="email" type="email" placeholder="juan@example.com" required className={inputClasses} value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Teléfono móvil (WhatsApp)</label>
          <div className="relative">
            <input id="phone" type="tel" placeholder="+34 123 456 789" required className={inputClasses} value={formData.phone} onChange={handleChange} />
            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div>
          <label htmlFor="profession" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Profesión</label>
          <div className="relative">
            <select 
              id="profession" 
              className={selectClasses}
              value={formData.profession}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Selecciona tu profesión</option>
              <option value="abogado">Abogado</option>
              <option value="contador">Contador</option>
              <option value="ingeniero">Ingeniero</option>
              <option value="medico">Médico</option>
              <option value="profesor">Profesor</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
        <button type="submit" className={`w-full p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${fontClasses.semibold}`}>
          Continuar
        </button>
      </form>
    </>
  )
}

function UserPreferences({ onPreferencesSaved }: { onPreferencesSaved: () => void }) {
  const [preferences, setPreferences] = useState({
    monthly: false,
    daily: false,
    biweekly: false,
    interest: false
  });
  const [error, setError] = useState('');
  const errorRef = useRef<HTMLParagraphElement>(null);

  const options = [
    { icon: Calendar, text: "Quiero recibir un enlace mensual para mis cursos en vivo (vía WhatsApp)", key: 'monthly' },
    { icon: Bell, text: "Quiero enlaces diarios de todos los cursos (vía WhatsApp)", key: 'daily' },
    { icon: Mail, text: "Quiero un email quincenal con un enlace para mis cursos en vivo", key: 'biweekly' },
    { icon: Star, text: "Prefiero notificaciones por correo solo para cursos de mi interés", key: 'interest' }
  ] as const;

  const lawAreas = [
    { icon: Gavel, name: "Derecho Civil" },
    { icon: Shield, name: "Derecho Penal" },
    { icon: Briefcase, name: "Derecho Mercantil" },
    { icon: HardHat, name: "Derecho Laboral" },
    { icon: Building, name: "Derecho Administrativo" },
    { icon: Scale, name: "Derecho Constitucional" },
    { icon: Globe, name: "Derecho Internacional" },
    { icon: Calculator, name: "Derecho Fiscal" },
    { icon: Leaf, name: "Derecho Ambiental" },
    { icon: Users, name: "Derecho de Familia" },
    { icon: Home, name: "Derecho Inmobiliario" },
    { icon: Copyright, name: "Derecho de Propiedad Intelectual" },
    { icon: Wifi, name: "Derecho de las Tecnologías de la Información" },
    { icon: Target, name: "Derecho de la Competencia" },
    { icon: Landmark, name: "Derecho Bancario y Financiero" },
    { icon: Umbrella, name: "Derecho de Seguros" },
    { icon: Heart, name: "Derecho de la Salud" },
    { icon: Dumbbell, name: "Derecho del Deporte" },
    { icon: Plane, name: "Derecho Aeronáutico" },
    { icon: Anchor, name: "Derecho Marítimo" },
    { icon: Zap, name: "Derecho de la Energía" },
    { icon: FileText, name: "Derecho de Extranjería" },
    { icon: Stamp, name: "Derecho Notarial y Registral" },
    { icon: Sparkles, name: "Legal A.I." },
    { icon: Hand, name: "Legal Soft Skills" },
    { icon: MessageCircle, name: "Inglés Jurídico" },
    { icon: Flag, name: "Derecho Americano" },
    { icon: FileText, name: "Derecho Migratorio americano" },
  ];

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    setError(''); // Limpiar el error cuando el usuario selecciona una opción
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.values(preferences).some(Boolean)) {
      setError('Por favor, selecciona al menos una opción de notificación.');
      setTimeout(() => {
        errorRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    onPreferencesSaved();
  };

  return (
    <>
      <h1 className={`text-3xl mb-6 text-gray-900 ${fontClasses.bold}`}>Preferencias de Usuario</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <h2 className={`text-xl mb-4 text-gray-800 ${fontClasses.semibold}`}>Opciones de recepción de información de cursos y clases</h2>
          <div className="space-y-3">
            {options.map(({ icon: Icon, text, key }) => (
              <div key={key} className="flex items-center justify-between bg-white rounded-full shadow-sm p-4">
                <div className="flex items-center space-x-3 flex-grow">
                  <Icon className="h-5 w-5 text-blue-500" />
                  <label htmlFor={`option-${key}`} className="text-sm text-gray-700">{text}</label>
                </div>
                <div className="relative inline-block w-14 h-6 align-middle select-none transition duration-200 ease-in">
                  <input 
                    type="checkbox" 
                    name={`option-${key}`} 
                    id={`option-${key}`} 
                    checked={preferences[key]}
                    onChange={() => handleToggle(key)}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in"
                    style={{
                      transform: preferences[key] ? 'translateX(100%)' : 'translateX(0)',
                      borderColor: preferences[key] ? '#3b82f6' : '#d1d5db'
                    }}
                  />
                  <label 
                    htmlFor={`option-${key}`} 
                    className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${
                      preferences[key] ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  ></label>
                </div>
              </div>
            ))}
          </div>
          {error && (
            <p 
              ref={errorRef}
              className={`text-red-500 text-sm mt-2 ${fontClasses.medium}`}
              id="error-message"
            >
              {error}
            </p>
          )}
        </div>
        <div>
          <h2 className={`text-xl mb-4 text-gray-800 ${fontClasses.semibold}`}>Áreas de Derecho de interés</h2>
          <div className="space-y-2">
            {lawAreas.map(({ icon: Icon, name }) => (
              <div key={name} className="flex items-center justify-between bg-white rounded-full shadow-sm p-3">
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-blue-500" />
                  <label htmlFor={`area-${name.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-700" style={{ fontSize: '0.8rem' }}>{name}</label>
                </div>
                <input 
                  type="checkbox" 
                  id={`area-${name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
        <button 
          type="submit" 
          className={`w-full p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${fontClasses.semibold}`}
        >
          Guardar y continuar
        </button>
      </form>
    </>
  )
}

function AltaLawgicLegalTrack({ userData, onCompleted }: { userData: any, onCompleted: () => void }) {
  const [isVerbose, setIsVerbose] = useState(false);
  const inputClasses = `w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${fontClasses.normal} text-gray-700 bg-gray-50`;
  const selectClasses = `w-full pl-4 pr-10 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${fontClasses.normal} appearance-none bg-gray-50 text-gray-700`;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCompleted();
  };

  return (
    <>
      <h1 className={`text-2xl mb-6 text-gray-900 ${fontClasses.bold}`}>Alta Lawgic Legal Track</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="confirmFullName" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Confirmar Nombre completo</label>
          <div className="relative">
            <input id="confirmFullName" defaultValue={userData.fullName} required className={inputClasses} />
          </div>
        </div>
        <div>
          <label htmlFor="confirmEmail" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Confirmar Correo electrónico</label>
          <div className="relative">
            <input id="confirmEmail" type="email" defaultValue={userData.email} required className={inputClasses} />
          </div>
        </div>
        <div>
          <label htmlFor="confirmPhone" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Confirmar Teléfono móvil (WhatsApp)</label>
          <div className="relative">
            <input id="confirmPhone" type="tel" defaultValue={userData.phone} required className={inputClasses} />
            <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        <div>
          <label htmlFor="organizationType" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Tipo de organización</label>
          <div className="relative">
            <select 
              id="organizationType" 
              className={selectClasses}
              defaultValue=""
            >
              <option value="" disabled hidden>Selecciona el tipo de organización</option>
              <option value="practica-independiente">Práctica independiente</option>
              <option value="despacho-boutique">Despacho boutique</option>
              <option value="big-law">Big Law</option>
              <option value="in-house">In House (Jurídico de Empresa)</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>
        <div>
          <label htmlFor="organizationName" className={`block text-sm text-gray-600 mb-1 ${fontClasses.medium}`}>Nombre de la organización</label>
          <div className="relative">
            <input id="organizationName" placeholder="Nombre de tu organización" required className={inputClasses} />
          </div>
        </div>
        
        {/* Botón para alternar modo Verbose */}
        <button
          type="button"
          onClick={() => setIsVerbose(!isVerbose)}
          className={`w-full p-2 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${fontClasses.medium}`}
        >
          {isVerbose ? "Mostrar menos información" : "Mostrar más información"}
        </button>
        
        {/* Cuadro de información sobre la licencia con animación en el stroke */}
        <div className="relative p-1 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
          <div className="bg-blue-100 rounded-xl p-4 relative z-10">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <p className={`${fontClasses.semibold} text-blue-800`}>Licencia activa</p>
                <p className={`text-sm ${fontClasses.normal} text-blue-600`}>
                  Tu licencia estará activa en las primeras semanas de Enero 2025.
                </p>
                {isVerbose && (
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Información adicional:</p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Acceso completo a todas las funcionalidades de Lawgic Legal Track</li>
                      <li>Soporte técnico prioritario</li>
                      <li>Actualizaciones automáticas durante todo el año 2025</li>
                      <li>Posibilidad de participar en sesiones de formación exclusivas</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <button 
          type="submit" 
          className={`w-full p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${fontClasses.semibold}`}
        >
          Confirmar datos y continuar
        </button>
      </form>
      
      {/* Estilos CSS para la animación */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientAnimation 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </>
  )
}

function Perks() {
  const [selectedPerks, setSelectedPerks] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [dataSharingAccepted, setDataSharingAccepted] = useState(false);

  const perks = [
    { id: 'tirant', label: 'Licencia de Tirant Lo Blanch (Enero-Diciembre 2025)', icon: Book },
    { id: 'vigilancia', label: 'Licencia Vigilancia de marcas (Hasta 100 marcas)', icon: Eye },
    { id: 'cactus', label: 'Cactus Legal (Documentos legales as a Service)', icon: CactusIcon }
  ];

  const handlePerkChange = useCallback((perkId: string) => {
    setSelectedPerks(prev => {
      if (prev.includes(perkId)) {
        return prev.filter(id => id !== perkId);
      } else {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        return [...prev, perkId];
      }
    });
  }, []);

  const isConfirmButtonDisabled = !termsAccepted || !dataSharingAccepted;

  return (
    <>
      <h1 className={`text-2xl mb-6 text-gray-900 ${fontClasses.bold}`}>Perks</h1>
      {showConfetti && <ReactConfetti recycle={false} />}
      <form className="space-y-4 max-w-md">
        {perks.map(perk => (
          <div key={perk.id} className="flex items-center justify-between bg-white rounded-full shadow-sm p-4">
            <div className="flex items-center space-x-3">
              <perk.icon className="h-5 w-5 text-blue-500" />
              <label htmlFor={`perk-${perk.id}`} className={`text-sm text-gray-700 ${fontClasses.medium}`}>
                {perk.label}
              </label>
            </div>
            <input 
              type="checkbox" 
              id={`perk-${perk.id}`} 
              className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
              checked={selectedPerks.includes(perk.id)}
              onChange={() => handlePerkChange(perk.id)}
            />
          </div>
        ))}
        
        {/* Primer aviso */}
        <p className={`text-xs text-gray-500 mt-4 mb-2 ${fontClasses.normal}`}>
          Acepto y entiendo que estas licencias son proveídas por organizaciones y empresas que no pertenecen a Lawgic, activaciones, soporte y cualquier falla debe ser reportada de forma directa y Lawgic no toma responsabilidad por la prestación de los servicios mencionados.
        </p>
        
        {/* Primer botón de confirmación */}
        <div className="flex items-center space-x-2 mt-4">
          <input 
            type="checkbox" 
            id="confirm-terms" 
            className="form-checkbox h-4 w-4 text-blue-600 rounded"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="confirm-terms" className={`text-sm text-gray-700 ${fontClasses.medium}`}>
            Confirmo que he leído y acepto los términos anteriores
          </label>
        </div>
        
        {/* Nuevo aviso */}
        <p className={`text-xs text-gray-500 mt-4 mb-2 ${fontClasses.normal}`}>
          Acepto y autorizo que mis datos sean compartidos a estas empresas para la prestación de los servicios, ya que son necesarios para este proceso. En caso de no aceptar, no podremos otorgar los beneficios. Para mayor información consulta nuestro términos de aviso de privacidad en <a href="https://getlawgic.com/privacidad" className="text-blue-600 hover:underline">getlawgic.com/privacidad</a>
        </p>
        
        {/* Nuevo botón de confirmación */}
        <div className="flex items-center space-x-2 mt-4">
          <input 
            type="checkbox" 
            id="confirm-data-sharing" 
            className="form-checkbox h-4 w-4 text-blue-600 rounded"
            checked={dataSharingAccepted}
            onChange={(e) => setDataSharingAccepted(e.target.checked)}
          />
          <label htmlFor="confirm-data-sharing" className={`text-sm text-gray-700 ${fontClasses.medium}`}>
            Acepto compartir mis datos para recibir los beneficios
          </label>
        </div>
        
        <button 
          type="submit" 
          className={`w-full p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${fontClasses.semibold} ${
            isConfirmButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isConfirmButtonDisabled}
        >
          Confirmar selección
        </button>
      </form>
    </>
  )
}

export default function RegistrationPage() {
  const [activeTab, setActiveTab] = useState("registro-usuario-1")
  const [userRegistered, setUserRegistered] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: ''
  })

  const menuItems = [
    { icon: User, label: "Alta de usuario", info: "Lesson • 1 task", href: "registro-usuario-1" },
    { icon: Settings, label: "Preferencias de Usuario", info: "Lesson • 2 tasks", href: "preferencia-usuario" },
    { icon: SparksIcon, label: "Lawgic Legal Track", info: "Workshop • 3 tasks", href: "alta-lawgic-legal-track" },
    { icon: Gift, label: "Perks", info: "Workshop • 2 tasks", href: "perks" },
  ]

  const handleContinue = (data: typeof userData) => {
    setUserData(data);
    setUserRegistered(true);
    setActiveTab("preferencia-usuario");
    setCompletedSteps(prev => [...prev, "registro-usuario-1"]);
  };

  const handlePreferencesSaved = () => {
    setActiveTab("alta-lawgic-legal-track");
    setCompletedSteps(prev => [...prev, "preferencia-usuario"]);
  };

  const handleLegalTrackCompleted = () => {
    setActiveTab("perks");
    setCompletedSteps(prev => [...prev, "alta-lawgic-legal-track"]);
  };

  return (
    <div className={`flex h-screen bg-[#F5F8FF] ${fontClasses.normal}`}>
      {/* Sidebar with vertical track */}
      <aside className="w-80 bg-white p-6 shadow-md">
        <div className="flex items-center mb-2">
          <svg width="32.13" height="28.305" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M24.1841 15.6312C24.1841 15.6312 24.2085 15.5949 24.2492 15.5385C24.3306 15.4216 24.4811 15.2079 24.6479 14.9861C24.6479 14.9861 24.6479 14.9821 24.6519 14.978C24.892 14.6676 25.6812 13.6475 26.4785 12.3573C26.5314 12.2686 26.5843 12.1839 26.6372 12.0952C27.1904 11.1679 27.5281 9.49062 27.5647 7.79722C27.585 6.89811 27.52 5.99899 27.3572 5.20471C26.8853 2.91862 23.9441 0.265625 23.9441 0.265625L23.7814 0.483348C23.6187 0.701071 22.4267 2.05176 21.3446 4.104C20.2625 6.15624 20.4781 9.99461 21.0354 11.6275C21.5968 13.2645 23.342 15.3651 23.342 15.3651C23.342 15.3651 24.2248 15.8127 21.8856 22.1629C17.0853 35.2263 0.507812 35.4359 0.507812 35.4359V36.702C0.507812 36.702 2.5622 36.9439 5.83295 36.0004C10.2956 34.7142 11.63 34.4844 15.7835 31.2266C19.937 27.9729 21.7067 24.5054 22.9718 21.3847C23.9563 18.9575 24.1801 15.6312 24.1801 15.6312" fill="#4570EB"/>
            <path d="M38.9278 26.5615C38.9278 26.5615 38.0572 25.8882 36.7595 25.0576C35.4618 24.227 31.8371 23.2271 28.0741 23.7069C24.3071 24.1867 21.8906 26.8115 21.8906 26.8115C21.8906 26.8115 21.9069 26.8276 21.9272 26.8518H21.8906C21.8906 26.8518 22.9402 28.0775 26.0686 29.3919C29.1969 30.7063 30.6452 30.3636 33.7491 29.6741C36.8531 28.9847 38.9278 26.6059 38.9278 26.6059H38.8912C38.9115 26.5817 38.9278 26.5655 38.9278 26.5655" fill="#4570EB"/>
            <path d="M19.1967 20.8178C19.1967 20.8178 19.2374 20.6968 19.3066 20.4831C19.4367 20.0759 19.6564 19.33 19.8802 18.3986C20.1364 17.3302 19.9859 15.1086 19.0909 12.7822C18.794 12.0081 18.4116 11.2219 17.9315 10.4639C16.4385 8.09309 13.9448 6.92384 12.9278 6.52468C12.643 6.41179 12.4722 6.35938 12.4722 6.35938C12.4722 6.35938 11.6463 7.72216 11.5202 10.8912C11.39 14.0643 12.285 15.1731 14.1563 17.564C16.0277 19.955 19.1967 20.8218 19.1967 20.8218" fill="#4570EB"/>
            <path d="M4.40587 18.9472C5.39035 21.9873 6.62298 22.7695 9.23063 24.475C11.7162 26.1039 14.8324 26.0676 15.1172 26.0595H15.1375C15.1375 26.0595 15.1131 25.0112 14.9382 23.5638C14.7632 22.1163 13.193 18.9351 10.3209 16.6329C7.45287 14.3307 3.72243 14.3751 3.72243 14.3751H3.69802L3.71836 14.3952C3.68582 14.5847 3.48241 16.1088 4.4018 18.9513" fill="#4570EB"/>
            <path d="M3.70203 31.1616C5.17875 31.1616 6.37477 30.0569 6.37477 28.6941C6.37477 27.3313 5.17875 26.2266 3.70203 26.2266C2.22532 26.2266 1.0293 27.3313 1.0293 28.6941C1.0293 30.0569 2.22532 31.1616 3.70203 31.1616Z" fill="#4570EB"/>
            <path d="M41.4905 13.5834L41.3563 13.6278C41.0268 13.5149 40.1155 13.2125 38.9154 12.894C37.398 12.4948 33.6188 12.6279 30.2219 14.2084C27.1952 15.6155 25.7755 18.3169 25.5029 18.8813L25.4541 18.8975C25.4541 18.8975 25.4704 18.9055 25.4866 18.9176C25.4663 18.966 25.4541 18.9902 25.4541 18.9902C25.4541 18.9902 26.8739 19.8329 30.2951 20.1474C33.7164 20.4578 34.9694 19.7039 37.6665 18.1233C40.3637 16.5428 41.4946 13.6762 41.4946 13.6762C41.4946 13.6762 41.4824 13.6721 41.462 13.6641C41.4824 13.6116 41.4946 13.5834 41.4946 13.5834" fill="#4570EB"/>
          </svg>
          <h2 className={`text-[1.38rem] text-[#4570EB] ${fontClasses.extrabold}`}>Lawgic</h2>
        </div>
        <p className={`text-sm text-gray-600 mb-8 ${fontClasses.medium}`}>Plan Anual 2025</p>
        <nav className="space-y-4">
          {menuItems.map(({ icon: Icon, label, info, href }) => (
            <button
              key={href}
              className={`flex items-center justify-between w-full p-4 rounded-xl transition-colors ${
                activeTab === href ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab(href)}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  completedSteps.includes(href) || activeTab === href
                    ? 'bg-blue-500'
                    : 'bg-[#F5F8FF]'
                }`}>
                  <Icon className={`h-5 w-5 ${
                    completedSteps.includes(href) || activeTab === href
                      ? 'text-white'
                      : 'text-blue-500'
                  }`} />
                </div>
                <div className="text-left">
                  <p className={`text-sm ${fontClasses.semibold} ${
                    completedSteps.includes(href) || activeTab === href ? 'text-blue-600' : 'text-gray-900'
                  }`}>{label}</p>
                  <p className={`text-xs ${fontClasses.normal} text-gray-500`}>{info}</p>
                </div>
              </div>
              <ChevronRight className={`h-5 w-5 ${
                completedSteps.includes(href) || activeTab === href ? 'text-blue-500' : 'text-gray-400'
              }`} />
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-10 overflow-auto bg-[#F5F8FF] flex justify-center items-start">
        <div className="w-full max-w-3xl">
          <div className="bg-white rounded-[2rem] shadow-lg p-8 mb-8">
            {activeTab === "registro-usuario-1" && <RegistrationForm onContinue={handleContinue} />}
            {activeTab === "preferencia-usuario" && <UserPreferences onPreferencesSaved={handlePreferencesSaved} />}
            {activeTab === "alta-lawgic-legal-track" && <AltaLawgicLegalTrack userData={userData} onCompleted={handleLegalTrackCompleted} />}
            {activeTab === "perks" && <Perks />}
          </div>
        </div>
      </main>
    </div>
  )
}
