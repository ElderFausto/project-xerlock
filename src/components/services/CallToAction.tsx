import React from 'react'

const CallToAction: React.FC = () => {
  return (
    <section className="gradient-bg py-16">
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="bg-transparent rounded-t-[10px] p-6 text-center">
          <h2 className="text-[#EDEDED] font-semibold text-5xl leading-[56px] mb-8 max-w-5xl mx-auto">
            Pronto para Desbloquear o Potencial da sua Fábrica de Analytics?
          </h2>
          
          <p className="text-[#EDEDED] font-medium text-2xl leading-9 mb-12 max-w-5xl mx-auto text-justify">
            Chega de tomar decisões no escuro. Veja na prática como a Xerlock pode transformar sua operação, otimizar recursos e proteger sua organização.
            <br />
            <p>Clique abaixo para falar diretamente com um de nossos especialistas.</p>
          </p>
          
          <div className="flex justify-center">
            <button className="bg-[#FF990A] border border-[#FFAF3F] rounded-lg px-3 py-4 shadow-button hover:opacity-90 transition-opacity flex items-center gap-3">
              <img 
                src="https://static.codia.ai/image/2025-12-05/K4VsDPHJ9v.png" 
                alt="Calendar" 
                className="w-[35px] h-[35px]"
              />
              <span className="text-[#090D16] font-bold text-2xl leading-6 right-5">
                Agende sua demonstração gratuita
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
