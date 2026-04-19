import ContactUs from "./typography/contact-us";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-wood-brown text-foreground border-t border-fire-orange/30 pt-16 pb-8 mt-auto overflow-hidden z-10 w-full">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-background via-fire-orange to-background"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-fire-red/10 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-fire-orange/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Brand & Info */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-fire-yellow pb-2">
              PIQUAIIA
            </h2>
            <p className="text-foreground/80 max-w-md text-xl leading-relaxed">
              Éveillez vos sens avec chaque goutte. La chaleur authentique du cœur du Congo directement à votre table.
            </p>
            <div className="pt-6 flex space-x-4">
              <div aria-label="Facebook" className="w-12 h-12 rounded-full bg-[#120500] flex items-center justify-center text-fire-orange hover:bg-fire-orange hover:text-[#120500] transition-all duration-300 cursor-pointer border border-fire-orange/20 shadow-lg hover:shadow-[0_0_15px_rgba(242,92,5,0.6)] hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </div>
              <div aria-label="Instagram" className="w-12 h-12 rounded-full bg-[#120500] flex items-center justify-center text-fire-orange hover:bg-fire-orange hover:text-[#120500] transition-all duration-300 cursor-pointer border border-fire-orange/20 shadow-lg hover:shadow-[0_0_15px_rgba(242,92,5,0.6)] hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <ContactUs />
        </div>

        <div className="mt-20 pt-8 border-t border-wood-brown/50 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} PIQUAIIA Sauce Piquante. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
            <a href="#" className="hover:text-fire-yellow transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-fire-yellow hover:after:w-full after:transition-all">Mentions légales</a>
            <a href="#" className="hover:text-fire-yellow transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-fire-yellow hover:after:w-full after:transition-all">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}