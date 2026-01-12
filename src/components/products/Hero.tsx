import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-8 max-w-[1920px] mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#3A1726] px-3 py-2 rounded-full mb-8">
          <img 
            src="https://static.codia.ai/image/2025-12-16/NcSBUZXHmG.png" 
            alt="Shield" 
            className="w-4 h-4"
          />
          <span className="text-[#F75F8F] text-sm">Nossos produtos</span>
        </div>
        
        <h1 className="gradient-text text-5xl font-bold leading-[62.4px] mb-6 drop-shadow-lg">
          Nossas Soluções de Inteligência de Dados
        </h1>
        
        <p className="text-[#AFCDED] text-3xl leading-relaxed max-w-4xl mx-auto mb-12">
          Plataformas robustas e flexíveis, prontas para resolver os desafios mais complexos do seu negócio ou organização.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-[#1F2126] rounded-md p-1 flex">
          <button className="bg-[#1695F2] border border-[#20A1FF] text-[#023860] px-4 py-2 rounded-md text-sm font-medium">
            Setor Público
          </button>
          <button className="text-[rgba(162,162,162,0.9)] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Setor Privado
          </button>
        </div>
      </div>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#0F2E18] px-3 py-2 rounded-full mb-6">
          <img 
            src="https://static.codia.ai/image/2025-12-16/Dbvsojmutx.png" 
            alt="Vector" 
            className="w-[13px] h-[10px]"
          />
          <span className="text-[#62C073] text-sm">Soluções para o Setor Público</span>
        </div>
        
        <h2 className="gradient-text text-5xl font-bold leading-[62.4px] mb-6 drop-shadow-lg">
          Xerlock Governança de Dados - xGD
        </h2>
        
        <p className="text-[#AFCDED] text-3xl leading-relaxed max-w-4xl mx-auto">
          Governança e Compartilhamento de Grandes Volumes de Dados
        </p>
      </div>
    </section>
  )
}

export default Hero