import React from 'react'

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "https://static.codia.ai/image/2025-12-05/CXPvU9b2nk.png",
      title: "Escritório de Governança de Dados",
      description: "Implementamos políticas e práticas para garantir disponibilidade, usabilidade, integridade e segurança dos dados. Garantimos conformidade com LGPD e quebramos silos de dados para uma visão unificada."
    },
    {
      icon: "https://static.codia.ai/image/2025-12-05/FvKtz0GQU9.png",
      title: "Projetos de Business Analytics (CRISP-DM)",
      description: "Desenvolvemos projetos completos de análise de dados seguindo a metodologia CRISP-DM, desde o entendimento do negócio até a implantação de soluções que geram valor mensurável."
    },
    {
      icon: "https://static.codia.ai/image/2025-12-05/XECaABErX5.png",
      title: "Modelagem com Inteligência Artificial",
      description: "Criamos modelos de IA customizados para predição, classificação e otimização, transformando dados em insights acionáveis e automatizando processos complexos."
    },
    {
      icon: "https://static.codia.ai/image/2025-12-05/miTM3sEnRY.png",
      title: "Integração e MDM (Master Data Management)",
      description: "Integramos fontes de dados heterogêneas e estabelecemos processos de gestão de dados mestres, garantindo consistência e qualidade em toda a organização."
    }
  ]

  return (
    <section className="px-8 py-16 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-8 flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-4 w-full p-4">
              <img 
                src={service.icon} 
                alt={service.title}
                className="w-[66px] h-[66px] shadow-card"
              />
              <h3 className="text-[#7A67FE] font-extrabold text-[32px] leading-[41.6px] flex-1">
                {service.title}
              </h3>
            </div>
            
            <p className="text-[#91BBE6] text-2xl leading-[31.2px] tracking-[-0.22px] text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
