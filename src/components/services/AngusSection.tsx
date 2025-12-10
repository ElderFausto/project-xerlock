import React from 'react'

const AngusSection: React.FC = () => {
  return (
    <section className="px-8 py-16 max-w-[1920px] mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#0F2E18] px-3 py-2 rounded-full mb-8">
          <img 
            src="https://static.codia.ai/image/2025-12-05/KV4zsjTewt.png" 
            alt="Database" 
            className="w-[13px] h-[13px]"
          />
          <span className="text-[#62C073] font-medium text-sm">O Angus®</span>
        </div>
        
        <h2 className="gradient-text font-bold text-5xl leading-[62.4px] mb-8 bg-gradient-primary bg-clip-text text-transparent shadow-custom">
          Nossa plataforma de Governança de Dados
        </h2>
      </div>
      
      <div className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-8 items-center justify-between gap-[203px] max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="text-[#79A0CA] text-3xl leading-[45px] mb-8">
            Nossa plataforma de Governança de Dados é um dos destaques de nosso portfólio de produtos de dados. O <span className="text-[#FF990A]">Angus®</span> foi construído com base nas perspectivas do DAMA-DMBOK (Data Management - Body of Knowledge®), possibilitando a gestão do compartilhamento e das coleções de dados de uma empresa, associada aos mais novos conceitos de LGPD, proporcionando uma visão segura e compartimentalizada dos dados de todos os setores da organização, garantindo <span className="text-[#FF990A]">SEGURANÇA, GOVERNANÇA, QUALIDADE DOS DADOS, INTEROPERABILIDADE, INTELIGÊNCIA DE DADOS E INTEGRAÇÃO NATIVA COM IA.</span>
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <button className="bg-[#FF990A] border border-[#FFAF3F] rounded-lg px-3 py-4 shadow-button hover:opacity-90 transition-opacity">
            <span className="text-[#090D16] font-bold text-2xl leading-6">
              Quero conhecer melhor o Angus
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AngusSection
