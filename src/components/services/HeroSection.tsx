import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-8 max-w-[1920px] mx-auto font-geist">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#062822] px-3 py-2 rounded-full mb-8">
          <img 
            src="https://static.codia.ai/image/2025-12-05/SohTOgkENH.png" 
            alt="Rocket" 
            className="w-[23px] h-[23px]"
          />
          <span className="text-[#0AC7B4] font-medium text-sm">Serviços e Soluções</span>
        </div>
        
        <h1 className="gradient-text font-bold text-5xl leading-[62.4px] mb-6 bg-gradient-primary bg-clip-text text-transparent shadow-custom">
          Sua Fábrica de Analytics sob medida
        </h1>
        
        <p className="text-[#AFCDED] font-medium text-3xl leading-[45px] max-w-5xl mx-auto text-justify">
          Mais do que plataformas, somos sua Fábrica de Analytics. Nosso time de 
          elite de cientistas e analistas de dados está pronto para desenvolver 
          projetos de alto impacto.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
