import React from 'react'

const CompanyStrength: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#10233D] px-3 py-2 rounded-full flex items-center gap-2">
            <img 
              src="https://static.codia.ai/image/2025-12-04/UDOxZfneQU.png" 
              alt="Check" 
              className="w-4 h-4"
            />
            <span className="text-[#52A8FF] text-sm font-medium">Nossa Base</span>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Validados no Desafiador Cenário do Setor Público
          </h2>
          <p className="text-xl text-[#6586A9] max-w-4xl mx-auto">
            Nossa expertise foi forjada resolvendo alguns dos maiores desafios de dados do Brasil. A jornada como uma das <span className="text-primary-500">GovTechs Top 10 do país por três anos consecutivos</span> nos proporcionou uma experiência ímpar.
          </p>
        </div>
        
        {/* Strength Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* Escala Massiva */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/9nnhs3UaGY.png" 
                alt="Scale Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-3xl font-extrabold text-purple-700">
                Escala massiva
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Gerenciamos petabytes de dados em cenários de missão crítica.
              <br />
              Isso nos preparou para lidar com <span className="font-bold">QUALQUER</span> volume de dados que sua organização possa gerar.
            </p>
          </div>
          
          {/* Segurança Comprovada */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/gYCtWoOUkE.png" 
                alt="Security Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-3xl font-extrabold text-purple-700">
                Segurança comprovada
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Lidamos com informações sigilosas e sensíveis, onde a segurança é inegociável.
              <br /><br />
              Aplicamos o mesmo nível de proteção para blindar os ativos mais valiosos da sua organização.
            </p>
          </div>
          
          {/* Robustez em Campo */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/GJKfk3ada5.png" 
                alt="Robustness Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-3xl font-extrabold text-purple-700">
                Robustez em Campo
              </h3>
            </div>
            <p className="text-[#6586A9] leading-relaxed">
              Nossas soluções somam mais de 125.000 horas de operação em ambientes de alta exigência.
              <br /><br />
              Trazemos essa mentalidade focada em impacto e resiliência para o seu dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStrength
