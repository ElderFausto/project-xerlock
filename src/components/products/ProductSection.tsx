import React from 'react'
import ProductCard from './ProductCard'
import FeatureList from './FeatureList'

const ProductSection: React.FC = () => {
  const xgdFeatures = [
    "Aplicação das boas práticas da Data Management Association (DAMA).",
    "Governança de Dados de início ao fim baseada no DAMA-DMBOK.",
    "Estatísticas de armazenamento, ingestão e consumo de dados.",
    "Catálogo de dados com pedidos de acesso e gestão de permissões.",
    "Criação de conjuntos via wizard com processo de ingestão baseado em JDBC ou Arquivos.",
    "Camada de interoperabilidade via REST API com tokens de acesso.",
    "Níveis de perfil de acesso de acordo com objetivo de cada usuário.",
    "Histórico completo de permissões concedidas e justificativas.",
    "Compliance com LGPD proporcionando visão segura e compartimentalizada dos dados."
  ]

  const x2Features = [
    "Governança e gestão das coleções de dados de inteligência",
    "Catálogo de dados com controle de acesso compartimentalizado",
    "Criação facilitada de entidades de relacionamento (grafos)",
    "Processo de ingestão de dados automatizado (internos e externos)",
    "Busca textual em bases estruturadas e não estruturadas",
    "Análise de vínculos com visualização gráfica",
    "Análise de imagens com detecção de documentos, armas e drogas",
    "Geointeligência com plotagem em mapas",
    "Análise de dados geográficos de quebra de sigilo telefônico",
    "Sistema de alertas globais e específicos por alvo"
  ]

  const payrollFeatures = [
    "Auditoria completa com IA e Mineração de Dados",
    "Cruzamento de regras previstas pela CGU",
    "Regras customizáveis e parâmetros personalizados",
    "Detecção de CPF duplicado e inválido",
    "Identificação de servidores falecidos em atividade",
    "Análise de verbas incompatíveis e períodos de férias",
    "Controle de servidores com múltiplos vínculos",
    "Relatórios completos com exportação em Excel",
    "Prevenção de pagamentos indevidos e recuperação de receitas"
  ]

  return (
    <div className="px-8 max-w-[1920px] mx-auto space-y-16">
      {/* XGD Description */}
      <div className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-12">
        <p className="text-[#79A0CA] text-3xl leading-relaxed">
          O <span className="text-[#FF990A]">Xerlock Governança de Dados</span> permite a governança total dos dados, com base nas perspectivas do <span className="text-[#FF990A]">DAMA-DMBOK (Data Management - Body of Knowledge®)</span>, possibilitando a gestão do compartilhamento e das coleções de dados, associada aos mais novos conceitos de LGPD, proporcionando uma visão segura e compartimentalizada dos dados de todos os setores da administração pública. Garante <span className="text-[#FF990A]">SEGURANÇA, GOVERNANÇA, QUALIDADE DOS DADOS, INTEROPERABILIDADE, INTELIGÊNCIA DE DADOS e INTEGRAÇÃO COM IA</span>.
        </p>
      </div>

      {/* XGD Features and Product Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <FeatureList features={xgdFeatures} />
        <ProductCard 
          title="Xerlock Governança de Dados"
          description="Governança total dos seus Dados."
          logoUrl="https://static.codia.ai/image/2025-12-16/Y60jMQfcWG.png"
          demoUrl="xgd.com.br/demo"
          iconUrl="https://static.codia.ai/image/2025-12-16/3LEqQ7mhPc.png"
        />
      </div>

      {/* X2 Header */}
      <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold leading-[62.4px] mb-6 drop-shadow-lg">
          Xerlock Inteligência Investigativa - x2
        </h2>
        <p className="text-[#AFCDED] text-3xl leading-relaxed max-w-4xl mx-auto">
          Integração e Colaboração para Análise de Grandes Volumes de Dados.
        </p>
      </div>

      {/* X2 Description */}
      <div className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-12">
        <p className="text-[#AFCDED] text-3xl leading-relaxed">
          O <span className="text-[#FF990A]">x2 - Xerlock Inteligência Investigativa</span> é uma plataforma dividida em dois módulos correlacionados: o primeiro voltado para <span className="text-[#FF990A]">governança e gestão dos dados</span> (boletins de ocorrência, ouvidoria, corregedoria, imagens, áudios, bases externas); e o segundo para <span className="text-[#FF990A]">criação de análises integradas</span>, com acesso a repositório único respeitando privacidade e segurança no acesso às coleções, garantindo <span className="text-[#FF990A]">compartimentalização dos dados e sigilo das análises</span>.
        </p>
      </div>

      {/* X2 Features and Product Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <FeatureList features={x2Features} />
        <ProductCard 
          title="Xerlock Inteligência Investigativa - x2"
          description="Inteligência Investigativa em grande volumes de dados"
          logoUrl="https://static.codia.ai/image/2025-12-16/v5EVv9kmQe.png"
          demoUrl="x2inteligenciainvestigativa.com.br/home"
          iconUrl="https://static.codia.ai/image/2025-12-16/kfJm9gUedB.png"
        />
      </div>

      {/* Payroll Header */}
      <div className="text-center">
        <h2 className="gradient-text text-5xl font-bold leading-[62.4px] mb-6 drop-shadow-lg">
          Xerlock Payroll Audit
        </h2>
        <p className="text-[#AFCDED] text-3xl leading-relaxed max-w-4xl mx-auto">
          Eficiência e Segurança Máxima para sua Folha de Pagamento.
        </p>
      </div>

      {/* Payroll Description */}
      <div className="bg-[#090D16] border border-[#10233D] rounded-[32px] p-12">
        <p className="text-[#6586A9] text-3xl leading-relaxed">
          <span className="text-[#FF990A]">Auditoria inteligente e automatizada da folha de pagamento. Identifique inconsistências, reduza custos e garanta compliance total.</span>
          <br /><br />
          Solução de auditoria completa da folha de pagamento utilizando tecnologias de <span className="text-[#FF990A]">Inteligência Artificial e Mineração de dados</span>. Pode ser executada antes do processamento para evitar perdas ou em folhas anteriores para recuperação de receita.
        </p>
      </div>

      {/* Payroll Features and Product Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <FeatureList features={payrollFeatures} />
        <ProductCard 
          title="Xerlock Payroll Audit"
          description="Inteligência Investigativa em grande volumes de dados"
          logoUrl="https://static.codia.ai/image/2025-12-16/FJuXUtBQ3v.png"
          demoUrl="xerlockpayroll.com.br/home"
          iconUrl="https://static.codia.ai/image/2025-12-16/1RqmNeDKNi.png"
        />
      </div>
    </div>
  )
}

export default ProductSection