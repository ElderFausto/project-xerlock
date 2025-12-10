import React from "react";

const GovernanceSection: React.FC = () => {
  return (
    <section className="px-8 py-16 max-w-[1920px] mx-auto">
      <div className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text font-bold text-[42px] leading-[54.6px] mb-8 bg-gradient-primary bg-clip-text text-transparent shadow-custom">
            Governança de Dados: O Ativo Mais Valioso da Sua Organização
          </h2>

          <div className="text-[#79A0CA] font-medium text-3xl leading-[45px] mb-12">
            <p className="mb-6 text-justify">
              A governança de dados é o conjunto de práticas que as organizações
              possuem para gerenciar a{" "}
              <span className="text-[#FF990A]">
                disponibilidade, usabilidade, integridade e segurança
              </span>{" "}
              dos dados em sistemas corporativos. Sem ela, não há transformação
              digital ou ideias inovadoras que alimentem iniciativas relevantes.
            </p>
            <p className="text-justify">
              Uma governança eficaz garante que os dados confiados à sua
              organização sejam consistentes e não sejam mal utilizados,{" "}
              <span className="text-[#FF990A]">criando valor através de:</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-7 mb-6">
          <div className="flex items-center gap-5">
            <img
              src="https://static.codia.ai/image/2025-12-05/8nRVWz9otc.png"
              alt="Check"
              className="w-[67px] h-[67px]"
            />
            <div className="text-[32px] leading-[48px] font-medium">
              <span className="text-[#1695F2]">Quebra de silos:</span>
              <span className="text-[#6586A9]">
                 Coordenação centralizada dos dados
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img
              src="https://static.codia.ai/image/2025-12-05/1onsJdHJNk.png"
              alt="Check"
              className="w-[67px] h-[67px]"
            />
            <div className="text-[32px] leading-[48px] font-medium">
              <span className="text-[#1695F2]">Uso adequado:</span>
              <span className="text-[#6586A9]">
                Conformidade com LGPD e regulações
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center gap-5">
            <img
              src="https://static.codia.ai/image/2025-12-05/v8vCRdVPdD.png"
              alt="Check"
              className="w-[67px] h-[67px]"
            />
            <div className="text-[32px] leading-[48px] font-medium">
              <span className="text-[#1695F2]">Equilíbrio:</span>
              <span className="text-[#6586A9]">
                Coleta precisa com privacidade garantida
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img
              src="https://static.codia.ai/image/2025-12-05/wcSJCRnNmm.png"
              alt="Check"
              className="w-[67px] h-[67px]"
            />
            <div className="text-[32px] leading-[48px] font-medium">
              <span className="text-[#1695F2]">Qualidade:</span>
              <span className="text-[#6586A9]">

                Dados padronizados e confiáveis
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
