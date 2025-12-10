import React from 'react'

const HighlightsSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Highlights Grid */}
        <div className="flex justify-center items-center gap-24 mb-16">
          {/* Card 1 - 140 mil horas */}
          <div className="bg-background-card border border-purple-400/66 rounded-[32px] p-8 w-[470px] h-[238px] flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 p-4 w-full">
              <img 
                src="https://static.codia.ai/image/2025-12-04/OA0rc4ee6G.png" 
                alt="Hours icon" 
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-purpleAccent text-3xl font-extrabold">140 mil horas</h3>
            </div>
            <p className="text-primary-lightGray text-center">Em projetos de impacto e alta complexidade.</p>
          </div>
          
          {/* Card 2 - Segurança total */}
          <div className="bg-background-card border border-purple-600 rounded-[32px] p-8 w-[446px] h-[238px] flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 p-4 w-full">
              <img 
                src="https://static.codia.ai/image/2025-12-04/2Lktbrbanw.png" 
                alt="Security icon" 
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-purpleAccent text-3xl font-extrabold">Segurança total</h3>
            </div>
            <p className="text-primary-lightGray text-center">Conformidade com LGPD e padrões internacionais.</p>
          </div>
          
          {/* Card 3 - IA Integrada */}
          <div className="bg-background-card border border-purple-600 rounded-[32px] p-8 w-[457px] h-[238px] flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 p-4 w-full">
              <img 
                src="https://static.codia.ai/image/2025-12-04/5j39PjqG7h.png" 
                alt="AI icon" 
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-purpleAccent text-3xl font-extrabold">IA Integrada</h3>
            </div>
            <p className="text-primary-lightGray text-center">Integração nativa com Inteligência Artificial</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection