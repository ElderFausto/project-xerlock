import React from 'react'

interface FeatureListProps {
  features: string[]
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="space-y-4">
      <h3 className="gradient-text text-[32px] font-bold leading-[41.6px] drop-shadow-lg mb-6">
        Principais funcionalidades:
      </h3>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src="https://static.codia.ai/image/2025-12-16/4b2Ei0a0c3.png"
              alt="Check"
              className="w-[25.73px] h-[25.67px] mt-1 flex-shrink-0"
            />
            <p className="text-[#AFCDED] text-3xl leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#FF990A] border border-[#FF990A] text-[#090D16] px-4 py-3 rounded-md flex items-center gap-2 hover:bg-[#e6890a] transition-colors">
          <span className="text-sm font-medium">Baixar Folder Completo (PDF)</span>
          <img
            src="https://static.codia.ai/image/2025-12-16/rxOiM1xTxT.png"
            alt="Download"
            className="w-[18px] h-[18px]"
          />
        </button>
      </div>
    </div>
  )
}

export default FeatureList