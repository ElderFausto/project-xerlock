import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent shadow-custom">
          Conheça sua Fábrica de Analytics
        </h1>
        
        {/* Main Content Card */}
        <div className="bg-background-card rounded-[32px] p-8 mb-16">
          <div className="flex items-center justify-between gap-52">
            <div className="flex-1">
              <h2 className="text-primary-orange text-3xl font-black mb-6 text-orange-500">Quem somos?</h2>
              <p className="text-primary-grayBlue text-3xl font-medium leading-[45px] text-grayXerlock-300">
                A Xerlock é uma <span className="text-orange-500">fábrica de Analytics</span> com inovação em seu DNA, com um time especializado no desenvolvimento{' '}
                de produtos de análise e cruzamento de grandes volumes de dados, com{' '}
                mais de <span className="text-orange-500">140 mil horas em projetos de impacto</span>, com foco nas áreas de governança de dados, problemas complexos de análise e interoperabilidade, e{' '}
                <span className="text-primary-orange">Inteligência Artificial</span>, com o objetivo{' '}
                <span className="text-primary-orange">de apoiar as empresas e organizações a impulsionar seus negócios por meio da transformação de dados em conhecimento útil para a tomada de decisões estratégicas</span>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="flex justify-center mb-16">
          <img 
            src="https://static.codia.ai/image/2025-12-04/6aikXnih1P.png" 
            alt="Decorative line" 
            className="w-[743px] h-2"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
