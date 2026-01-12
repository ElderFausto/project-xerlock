import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060B11] shadow-lg">
      <div className="flex items-center justify-between px-8 py-5 h-28">
        <div className="flex items-center gap-4">
          <img 
            src="https://static.codia.ai/image/2025-12-04/JJg7RTOzrY.png" 
            alt="Xerlock Logo" 
            className="w-[52px] h-[57px]"
          />
          <nav className="flex items-center gap-6 ml-4">
            <a href="/" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Início</a>

            <NavLink to="/about" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Quem somos</NavLink>

            <a href="/products" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Produtos e Soluções</a>

            <a href="/services" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Serviços</a>

            <a href="#" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Clientes</a>

            <a href="#" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Newsletter Xerlock</a>

            <a href="#" className="text-primary-500 text-sm font-inter hover:text-primary-400 transition-colors">Contato</a>

          </nav>
        </div>
        
        <div className="flex items-center gap-1">
          <img 
            src="https://static.codia.ai/image/2025-12-04/icfCQhB7CQ.png" 
            alt="Email" 
            className="w-8 h-9"
          />
          <div className="flex items-center gap-2 bg-transparent px-2 py-1 rounded">
            <img 
              src="https://static.codia.ai/image/2025-12-04/71sbFeY862.png" 
              alt="LinkedIn" 
              className="w-[22.75px] h-[22.75px]"
            />
            <img 
              src="https://static.codia.ai/image/2025-12-04/PAcR957hBk.png" 
              alt="WhatsApp" 
              className="w-[26px] h-[26px]"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
