import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.codia.ai/image/2025-12-04/Lk4rqRLuXr.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      
      {/* Blur Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-radial z-10"></div>
      
      <div className="relative z-20 container mx-auto px-8 flex items-center min-h-[600px]">
        <div className="flex items-center gap-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://static.codia.ai/image/2025-12-04/4XGtfvi1Aa.png" 
              alt="Xerlock Logo" 
              className="w-[329px] h-[363px]"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 max-w-4xl">
            <h1 className="text-7xl font-bold leading-tight mb-4 text-[#C9DDFE] shadow-custom-dark">
              Fábrica de Analytics
            </h1>
            <h2 className="text-4xl font-bold text-primary-500 mb-8 shadow-custom-dark">
              Decisões Baseadas em Dados, Resultados Reais.
            </h2>
            <p className="text-3xl text-[#6586A9] leading-relaxed mb-12 max-w-3xl">
              Soluções de Business Analytics e Inteligência Artificial para otimizar operações, mitigar riscos e acelerar o crescimento da sua empresa/instituição. Bem-vindo à sua Fábrica de Analytics.
            </p>
            
            <div className="flex gap-4">
              <button className="bg-transparent border border-primary-500 text-primary-500 px-6 py-3 rounded-full font-medium hover:bg-primary-500 hover:text-white transition-colors">
                Quem somos
              </button>
              <button className="bg-purple-600 text-dark-950 px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-custom-light hover:bg-purple-500 transition-colors">
                Agende uma demonstração
                <img 
                  src="https://static.codia.ai/image/2025-12-04/erfRWpM5ER.png" 
                  alt="Arrow" 
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
