import React from 'react'

const ProductsSection: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#0F2E18] px-3 py-2 rounded-full flex items-center gap-2">
            <img 
              src="https://static.codia.ai/image/2025-12-04/dKZ8WcWFN9.png" 
              alt="Arrow" 
              className="w-[18px] h-[18px]"
            />
            <span className="text-[#62C073] text-sm font-medium">Serviços e Soluções</span>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent shadow-custom-dark">
            Nossas Soluções de Inteligência de Dados
          </h2>
          <p className="text-xl text-[#6586A9] max-w-4xl mx-auto">
            Plataformas robustas e flexíveis, prontas para resolver os desafios mais complexos do seu negócio ou instituição.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[rgba(16,35,61,0.37)] rounded-lg p-1 flex">
            <button className="bg-[#380172] text-white px-4 py-2 rounded-lg text-sm">
              Setor Público
            </button>
            <button className="text-purple-700 px-4 py-2 rounded-lg text-sm">
              Setor Privado
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 max-w-7xl mx-auto mb-16">
          {/* xGD Card */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/LJDBAoEL5S.png" 
                alt="xGD Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Xerlock Governança de Dados - xGD
              </h3>
            </div>
            <h4 className="text-primary-500 font-semibold mb-4">
              A Base para uma Cultura Orientada a Dados.
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Estabeleça controles robustos, qualidade de dados e conformidade regulatória.
              <br /><br />
              Transforme seus dados em ativos confiáveis e estratégicos.
            </p>
            <div className="flex gap-2 mb-4">
              <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                Saiba mais
                <img 
                  src="https://static.codia.ai/image/2025-12-04/bWm2bHdb5B.png" 
                  alt="Arrow" 
                  className="w-4 h-4"
                />
              </button>
            </div>
            <button className="text-[#6586A9] text-sm font-medium flex items-center gap-2">
              Baixar Folder
              <img 
                src="https://static.codia.ai/image/2025-12-04/ZLO3tkyURB.png" 
                alt="Download" 
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>
          
          {/* x2 Card */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/3gzaYDxwge.png" 
                alt="x2 Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Xerlock Inteligência Investigativa - x2
              </h3>
            </div>
            <h4 className="text-primary-500 font-semibold mb-4">
              Antecipe Riscos e Proteja Seus Ativos.
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Detecção proativa de fraudes, anomalias e ameaças.
              <br />
              Análise investigativa avançada para proteger sua organização e identificar oportunidades ocultas.
            </p>
            <div className="flex gap-2">
              <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                Saiba mais
                <img 
                  src="https://static.codia.ai/image/2025-12-04/Q5BYV9PjOA.png" 
                  alt="Arrow" 
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
          
          {/* Payroll Audit Card */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://static.codia.ai/image/2025-12-04/6DZRJkCFbz.png" 
                alt="Payroll Icon" 
                className="w-[54px] h-[49px] shadow-card"
              />
              <h3 className="text-2xl font-extrabold text-purple-700 leading-tight">
                Xerlock Payroll Audit
              </h3>
            </div>
            <h4 className="text-primary-500 font-semibold mb-4">
              Eficiência e Segurança Máxima para sua Folha de Pagamento.
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Auditoria inteligente e automatizada da folha de pagamento.
              <br /><br />
              Identifique inconsistências, reduza custos e garanta compliance total.
            </p>
            
            <div className="flex gap-2 mb-4">
              <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                Saiba mais
                <img 
                  src="https://static.codia.ai/image/2025-12-04/L5vjjq1V2B.png" 
                  alt="Arrow" 
                  className="w-4 h-4"
                />
              </button>
            </div>
            <button className="text-[#6586A9] text-sm font-medium flex items-center gap-2">
              Baixar Folder
              <img 
                src="https://static.codia.ai/image/2025-12-04/PfERRLrTBm.png" 
                alt="Download" 
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
