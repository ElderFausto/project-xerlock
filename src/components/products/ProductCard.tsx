import React from 'react'

interface ProductCardProps {
  title: string
  description: string
  logoUrl: string
  demoUrl: string
  iconUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, logoUrl, demoUrl, iconUrl }) => {
  return (
    <div className="relative">
      {/* Video Demo Badge */}
      <div className="absolute top-4 right-4 z-10 bg-[#E5484D] px-3 py-1 rounded-full">
        <span className="text-[#0A0A0A] text-xs font-medium">Vídeo Demo</span>
      </div>

      <div className="bg-[#181818] border border-[#383737] rounded-[32px] overflow-hidden">
        <div className="flex">
          {/* Left side - Content */}
          <div className="flex-1 p-8">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white text-[32px] font-inter font-extrabold leading-[38.73px] mb-4">
                  {title}
                </h3>
                <p className="text-[#808080] text-base font-inter leading-[19.36px]">
                  {description}
                </p>
              </div>
              
              {/* Logo */}
              <div className="mt-8">
                <img 
                  src={logoUrl} 
                  alt={title}
                  className="w-[329px] h-[363px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right side - Gradient background with browser window */}
          <div className="w-[737px] h-[731px] gradient-bg rounded-r-[32px] relative">
            {/* Icon */}
            <img 
              src={iconUrl} 
              alt="Icon" 
              className="absolute top-16 left-[-30px] w-[65px] h-[65px] z-10"
            />
            
            {/* Browser Window */}
            <div className="absolute top-24 left-8 right-8 bg-black border border-[#333333] rounded-md overflow-hidden">
              {/* Window Header */}
              <div className="bg-black border-b border-[#333333] px-2 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF5F56] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#27C93F] rounded-full"></div>
                </div>
                <div className="text-[#888888] text-xs text-center flex-1">
                  {demoUrl}
                </div>
                <div className="w-16"></div>
              </div>
              
              {/* Window Body */}
              <div className="h-[314px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard