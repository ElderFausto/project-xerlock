import React from 'react'

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#3A1726] px-3 py-2 rounded-full flex items-center gap-2">
            <img 
              src="https://static.codia.ai/image/2025-12-04/qQxgt05nHq.png" 
              alt="Megaphone" 
              className="w-4 h-4"
            />
            <span className="text-[#F75F8F] text-sm font-medium">Newsletter</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent shadow-custom-dark">
          Novidades Xerlock
        </h2>
        
        {/* Newsletter Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-medium text-orange-500 mb-4">
              O que é Governança de Dados?
            </h3>
            <h4 className="text-[#AFCDED] font-semibold mb-4">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <br /><br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Ler texto completo
              <img 
                src="https://static.codia.ai/image/2025-12-04/ojWnoWxcSt.png" 
                alt="Arrow" 
                className="w-4 h-4"
              />
            </button>
          </div>
          
          {/* Card 2 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-medium text-orange-500 mb-4">
              A importancia de um Data Lake para o setor público
            </h3>
            <h4 className="text-[#AFCDED] font-semibold mb-4">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <br /><br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Ler texto completo
              <img 
                src="https://static.codia.ai/image/2025-12-04/ddpqx4Sxjt.png" 
                alt="Arrow" 
                className="w-4 h-4"
              />
            </button>
          </div>
          
          {/* Card 3 */}
          <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-medium text-orange-500 mb-4">
              Diretoria da Xerlock em visita ao Porto Digital.
            </h3>
            <h4 className="text-[#AFCDED] font-semibold mb-4">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="text-[#6586A9] leading-relaxed mb-8">
              Como parte do processo de "on boarding" previsto para as novas empresas embarcadas, os Diretores Hamilton Alves Pessoa e Mailson Santos estiveram em reunião no Porto Digita, conduzida com maestria pelo Henrique, <span className="text-primary-500">Consultor do Porto Digital</span>.
              <br /><br />
              Foi uma ótima oportunidade para conhecer os programas e as iniciativas do Porto Digital para alavancar novos negócios para as empresas embarcadas, no Brasil e além mar. Temos <span className="text-orange-500">orgulho em fazer parte desse ecossistema de tecnologia, referência internacional</span>.
            </p>
            <button className="bg-[#111828] border border-white/17 text-primary-500 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              Ler texto completo
              <img 
                src="https://static.codia.ai/image/2025-12-04/b5C6jt1fU8.png" 
                alt="Arrow" 
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
