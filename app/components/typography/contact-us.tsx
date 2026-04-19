import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="bg-[#120500]/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-fire-orange/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fire-yellow to-fire-red rounded-bl-full opacity-10 pointer-events-none"></div>

      <h3 className="text-3xl font-black mb-8 text-foreground flex items-center relative z-10">
        <span className="w-3 h-8 bg-gradient-to-b from-fire-yellow to-fire-red mr-4 rounded-full"></span>
        Contactez nous
      </h3>
      <form className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-foreground/80 pl-1 uppercase tracking-wide">Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full bg-black/60 border border-wood-brown focus:border-fire-orange focus:ring-2 focus:ring-fire-orange/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/30 outline-none transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-foreground/80 pl-1 uppercase tracking-wide">Email</label>
            <input
              type="email"
              id="email"
              placeholder="votre@email.com"
              className="w-full bg-black/60 border border-wood-brown focus:border-fire-orange focus:ring-2 focus:ring-fire-orange/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/30 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-foreground/80 pl-1 uppercase tracking-wide">Message</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Comment pouvons-nous embraser votre journée ?"
            className="w-full bg-black/60 border border-wood-brown focus:border-fire-orange focus:ring-2 focus:ring-fire-orange/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/30 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-fire-red via-fire-orange to-fire-yellow p-[2px] mt-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fire-red via-fire-orange to-fire-yellow opacity-100 group-hover:blur-md transition-all duration-300"></div>
          <div className="relative bg-[#120500] group-hover:bg-transparent transition-colors duration-300 rounded-xl py-4 flex items-center justify-center">
            <span className="font-bold text-lg text-foreground uppercase tracking-widest drop-shadow-md">
              Envoyer mon message
            </span>
            <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 drop-shadow-md text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </form>
    </div>
  )
}
