import React from "react";

const AwardsSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-background-footer rounded-full px-3 py-2 flex items-center gap-2">
            <img
              src="https://static.codia.ai/image/2025-12-04/GUDnvq4Vtd.png"
              alt="Trophy"
              className="w-4 h-4"
            />
            <span className="text-orange-500 text-sm font-medium">
              Destaques ao longo dos anos
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent shadow-custom mb-4">
            Premiações e Reconhecimentos
          </h2>
          <p className="text-primary-lightGray text-xl leading-7 -tracking-[0.34px] text-grayXerlock-400">
            Nossa excelência reconhecida por programas de inovação nacionais e
            internacionais.
          </p>
          <div className="flex justify-center mb-16">
            <img
              src="https://static.codia.ai/image/2025-12-04/6aikXnih1P.png"
              alt="Decorative line"
              className="w-[743px] h-2 mt-8"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-24">
          <p className="font-geist text-3xl text-grayXerlock-300">
            Em nossa trajetória, participamos de diversos programas de inovação.
            Em 2019 fomos uma das empresas vencedoras do programa de aceleração
            da <span className="text-orange-500">BrazilLab</span> em São Paulo. Também fomos a startup <span className="text-orange-500">VENCEDORA</span> nos
            programas de inovação aberta do <span className="text-orange-500">MPLabs & OIL</span> <span className="font-bold">(Ministério Público de
            PE e Porto Digital) e INOVA (Ministério Público de RJ).</span>
          </p>
          <p className="font-geist text-3xl text-grayXerlock-300">
            Figuramos também no ranking do <span className="font-bold">Banco Interamericano de
            Desenvolvimento – BID</span>, que elencou as startups mais promissoras do
            Brasil. Fomos a startup selecionada pelo programa Estonia Hub,
            promovido pelo Governo da <span className="text-orange-500">Estônia</span> e o Itamaraty.
          </p>
        </div>

        {/* Awards Grid - First Row */}
        <div className="flex justify-center items-center gap-12 mb-8">
          {/* MPLabs & OIL */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/xVjP6aR9Hs.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-orange text-2xl font-extrabold text-center">
                Vencedora
              </h3>
              <p className="text-primary-orange text-base font-semibold text-center">
                MPLabs & OIL
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              MP-PE e Porto Digital
            </p>
          </div>

          {/* INOVA MP - RJ */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/m6Xix5pAtS.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-orange text-2xl font-extrabold text-center">
                Vencedora
              </h3>
              <p className="text-primary-orange text-base font-semibold text-center">
                INOVA MP - RJ
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              Ministério Público do RJ
            </p>
          </div>

          {/* BID Ranking */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/xXhC93LwCD.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-lightBlue text-2xl font-extrabold text-center">
                Startups promissoras
              </h3>
              <p className="text-primary-lightBlue text-base font-semibold text-center">
                Ranking MID
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              Banco Interamericano de Desenvolvimento
            </p>
          </div>

          {/* Estonia Hub */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/kq5wxrUOYZ.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-lightBlue text-2xl font-extrabold text-center">
                Selecionada
              </h3>
              <p className="text-primary-lightBlue text-base font-semibold text-center">
                Estonia Hub
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              Governo da Estônia e Itamaraty
            </p>
          </div>
        </div>

        {/* Awards Grid - Second Row */}
        <div className="flex justify-center items-center gap-12">
          {/* BrazilLab */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/fsETTwjowt.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-orange text-2xl font-extrabold text-center">
                Vencedora
              </h3>
              <p className="text-primary-orange text-base font-semibold text-center">
                BrazilLab
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              Programa de Aceleração - SP
            </p>
          </div>

          {/* GovTech Brasil 2021 */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/gnLsPuqEZB.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-lightBlue text-2xl font-extrabold text-center">
                TOP 10
              </h3>
              <p className="text-primary-lightBlue text-base font-semibold text-center">
                GovTech Brasil 2021
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              100 Open Startups
            </p>
          </div>

          {/* GovTech Brasil 2022 */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/0dWnA02qEu.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-lightBlue text-2xl font-extrabold text-center">
                TOP 6
              </h3>
              <p className="text-primary-lightBlue text-base font-semibold text-center">
                GovTech Brasil 2022
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              100 Open Startups
            </p>
          </div>

          {/* GovTech Brasil 2023 */}
          <div className="bg-background-card border border-primary-darkGray rounded-[32px] p-8 w-[291px] h-[284px] flex flex-col items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2 p-4 h-[164px]">
              <img
                src="https://static.codia.ai/image/2025-12-04/vgDzObe66J.png"
                alt="Award icon"
                className="w-[77px] h-[71px] shadow-card"
              />
              <h3 className="text-primary-lightBlue text-2xl font-extrabold text-center">
                TOP 5
              </h3>
              <p className="text-primary-lightBlue text-base font-semibold text-center">
                GovTech Brasil 2023
              </p>
            </div>
            <p className="text-primary-lightGray text-sm text-center -tracking-[0.14px]">
              100 Open Startups
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
