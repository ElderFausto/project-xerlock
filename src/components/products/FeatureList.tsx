import React from 'react'

interface FeatureListProps {
  features: string[]
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="space-y-4">

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
    </div>
  )
}

export default FeatureList