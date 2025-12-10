import React from 'react'

const ProblemsSection: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#331B00] px-3 py-2 rounded-full flex items-center gap-2">
            <img 
              src="https://static.codia.ai/image/2025-12-04/pY2W0hwxjJ.png" 
              alt="Shield" 
              className="w-4 h-4"
            />
            <span className="text-orange-500 text-sm font-medium">Assuma o comando</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent shadow-custom-dark">
          Sua instituição está no controle dos seus dados?
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/eaWE1bTEiv.png" 
                alt="Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Dados Desconectados e Pouco Confiáveis?
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Cada departamento possui sua própria versão da verdade? A dificuldade em unificar informações de diferentes sistemas impede uma visão 360º e gera desconfiança nos relatórios.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/MG1S4sGiPW.png" 
                alt="Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Gestão Reativa e Sem Visibilidade?
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Você descobre os problemas (gargalos operacionais, queda de performance) apenas depois que eles impactam o resultado? Falta um acompanhamento proativo com painéis inteligentes que alertem sobre os riscos antes que se tornem críticos.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/S4YuHWA0gJ.png" 
                alt="Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Processos Ineficientes e Custos Elevados?
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Operações manuais, retrabalho e processos lentos consomem recursos valiosos. Você sente que poderia otimizar a alocação de equipes e investimentos, mas não sabe por onde começar?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
