import React from 'react'

const SuperioritySection: React.FC = () => {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        <div className="bg-dark-950 border border-[#10233D] rounded-3xl p-16 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent shadow-custom-dark">
              Superamos o desafio de levar inteligência
            </h2>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent shadow-custom-dark">
              de dados ao setor público.
            </h2>
            <p className="text-3xl text-primary-500 mb-8 shadow-custom-dark">
              Agora, sua empresa/instituição pode contar com essa mesma robustez para acelerar resultados.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 text-dark-950 px-8 py-3 rounded-lg font-medium shadow-custom-light hover:bg-orange-400 transition-colors">
              Agendar uma análise para minha instituição
            </button>
            <button className="bg-purple-600 text-dark-950 px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-custom-light hover:bg-purple-500 transition-colors">
              Agendar uma demonstração
              <img 
                src="https://static.codia.ai/image/2025-12-04/VWtWCVw3Qr.png" 
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

export default SuperioritySection
