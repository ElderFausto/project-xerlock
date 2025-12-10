import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-footer py-16 px-8 mt-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center">
            <img 
              src="https://static.codia.ai/image/2025-12-04/Bv1v8rYykk.png" 
              alt="Xerlock Logo" 
              className="w-[186px] h-[206px] mb-4"
            />
            <p className="text-purple-700 font-medium text-center">
              Fábrica de Analytics - Transformando Dados em Resultados
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="text-right">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://static.codia.ai/image/2025-12-04/h2JyDGGJbj.png" 
                alt="WhatsApp" 
                className="w-[27.94px] h-[27.94px]"
              />
              <span className="text-[#B2B2B2] text-2xl font-medium">+55 81 98189-0712</span>
            </div>
            <p className="text-purple-700 text-sm font-medium">
              © 2025 Xerlock. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
