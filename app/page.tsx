import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow pt-20">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#120500] z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-fire-orange rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-fire-red rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-fire-yellow rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0">
              <div className="space-y-5">
                <div className="inline-flex items-center border border-fire-orange/30 bg-fire-orange/10 rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(242,92,5,0.2)]">
                  <span className="flex w-2 h-2 rounded-full bg-fire-yellow animate-pulse mr-2"></span>
                  <span className="text-fire-yellow text-sm font-bold uppercase tracking-widest">
                    Gagnez en chaleur
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red via-fire-orange to-fire-yellow pb-2 block drop-shadow-sm">
                    ÉVEILLEZ
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-red via-fire-orange to-fire-yellow pb-2 block drop-shadow-sm">
                    VOS SENS.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-light border-l-[3px] border-fire-orange pl-5 leading-relaxed">
                  La chaleur authentique du cœur du Congo. Chaque goutte transmet la force, la couleur et le feu de Piquaiia.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <a
                  href="#recettes"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-fire-red to-fire-yellow text-[#120500] font-black text-lg uppercase tracking-wide hover:shadow-[0_0_30px_rgba(242,92,5,0.6)] transition-all hover:-translate-y-1 text-center"
                >
                  Découvrir les recettes
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-xl border border-fire-orange/50 bg-[#120500]/50 backdrop-blur-sm hover:bg-fire-orange/10 hover:border-fire-yellow transition-all font-bold text-lg text-center uppercase tracking-wide text-foreground"
                >
                  Nous contacter
                </a>
              </div>
            </div>

            {/* Right image column / decorative abstract representation */}
            <div className="order-1 lg:order-2 flex justify-center relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0 perspective-1000">
              <div className="relative w-full max-w-sm lg:max-w-md h-full rounded-3xl overflow-hidden border border-fire-orange/30 shadow-[0_0_80px_rgba(217,37,24,0.3)] transform transition-transform duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2e1100] via-fire-orange/30 to-fire-yellow/50 z-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[#120500]/60 backdrop-blur-[2px] z-0"></div>

                {/* Abstract bottle/fire shapes */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-72 sm:h-80 bg-gradient-to-b from-fire-red via-[#3e1b04] to-[#120500] rounded-full z-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center border-t-2 border-fire-yellow/30">
                  <div className="w-full h-full relative">
                    <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-8 h-12 bg-black rounded-t-lg"></div>
                    <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[85%] rounded-[2rem] border border-fire-orange/20 text-center py-8 bg-black/60 backdrop-blur-xl shadow-inner">
                      <span className="block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-fire-yellow to-fire-red tracking-tighter drop-shadow-lg">PIQUAIIA</span>
                      <span className="text-[10px] text-foreground/70 uppercase tracking-[0.3em] mt-2 block font-bold border-b border-fire-orange/30 pb-2 mx-4">Sauce Piquante</span>
                      <span className="text-[9px] text-fire-yellow uppercase mt-4 block">Origine Congo</span>
                    </div>
                  </div>
                </div>

                {/* Decorative floating embers */}
                <div className="absolute bottom-10 left-10 w-3 h-3 bg-fire-yellow rounded-full blur-[2px] animate-pulse"></div>
                <div className="absolute top-32 left-8 w-2 h-2 bg-fire-yellow rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute flex justify-center w-full bottom-8 z-30">
                  <div className="w-16 h-1 bg-fire-orange/50 rounded-full blur-md"></div>
                </div>
                <div className="absolute bottom-40 right-16 w-5 h-5 bg-fire-orange rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-20 right-10 w-4 h-4 bg-fire-red rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="recettes" className="py-24 sm:py-32 bg-[#120500] relative border-t border-wood-brown">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fire-orange/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Inspirations <span className="text-transparent bg-clip-text bg-gradient-to-r from-fire-orange to-fire-yellow">Culinaires</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-fire-red to-fire-yellow mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(242,92,5,0.4)]"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg sm:text-xl font-light">
              Découvrez comment sublimer vos plats avec nos sauces. De la marinade parfaite au frisson final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { title: "Poulet Braisé Piquaiia", time: "45 Min", spicy: 3 },
              { title: "Marinade Tropicale", time: "15 Min", spicy: 2 },
              { title: "L'Éveil Extra Fort", time: "30 Min", spicy: 5 }
            ].map((recipe, i) => (
              <div key={i} className="group rounded-3xl bg-[#1a0800] border border-wood-brown/50 overflow-hidden hover:border-fire-orange/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(242,92,5,0.15)] flex flex-col cursor-pointer">
                <div className="h-56 bg-[#120500] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-wood-brown to-[#0a0300] opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl drop-shadow-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">🔥</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0800] to-transparent opacity-80"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-fire-yellow text-sm font-bold uppercase tracking-wider bg-fire-yellow/10 px-3 py-1 rounded-full border border-fire-yellow/20">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.time}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className={`w-2 h-2 rounded-full ${j < recipe.spicy ? 'bg-fire-red' : 'bg-wood-brown'}`}></div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-fire-orange transition-colors">
                    {recipe.title}
                  </h3>

                  <p className="text-foreground/60 text-base mb-8 flex-grow leading-relaxed">
                    Une recette authentique revisitée avec une touche de notre Piquaiia originelle. Parfait pour réveiller vos papilles.
                  </p>

                  <span className="text-fire-orange font-bold flex items-center text-sm uppercase tracking-widest mt-auto group-hover:text-fire-yellow transition-colors relative inline-flex w-fit">
                    Voir la recette
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire-yellow group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
