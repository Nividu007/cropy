export default function Header() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // height of your fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
      <>
        <div className="relative overflow-hidden bg-gray-900 text-gray-100">
          <header
            id="page-header"
            className="relative flex flex-none items-center py-8"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
                <div className="flex items-center gap-2">
                <img
                    src="/logo.png"
                    alt="CropY Logo"
                    className="h-8 w-8"
                />
                <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-100 hover:text-gray-300"
                >
                    <span>CropY</span>
                </a>
                </div>
                <nav className="space-x-3 md:space-x-6">
                <a
                    href="#about"
                    onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    className="text-sm font-semibold text-gray-100 hover:text-emerald-400"
                >
                    <span>About</span>
                </a>
                <a
                    href="#predict"
                    onClick={(e) => { e.preventDefault(); scrollToSection('predict'); }}
                    className="text-sm font-semibold text-gray-100 hover:text-emerald-400"
                >
                    <span>Predict</span>
                </a>
                <a
                    href="#how"
                    onClick={(e) => { e.preventDefault(); scrollToSection('how'); }}
                    className="text-sm font-semibold text-gray-100 hover:text-emerald-400"
                >
                    <span>How</span>
                </a>
                </nav>
            </div>
          </header>
  
          <div className="relative container mx-auto px-4 py-12 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="text-center">
              <h1 className="mb-4 text-5xl font-black text-white">
                Crop Yield{" "}
                <span className="text-emerald-500">
                  Prediction
                </span>
              </h1>
              <h2 className="mx-auto text-xl leading-relaxed font-medium text-gray-300 lg:w-2/3">
                Forecast crop yields with 90% Accuracy using advanced AI technology.
              </h2>
            </div>
            <div className="flex flex-col gap-2 pt-10 pb-28 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="#predict"
                onClick={(e) => { e.preventDefault(); scrollToSection('predict'); }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-emerald-700 px-7 py-3.5 leading-6 font-semibold text-white hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring focus:ring-emerald-400/90"
              >
                <span>Predict Now</span>
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-transparent px-7 py-3.5 leading-6 font-semibold text-gray-300 hover:border-gray-600 hover:text-gray-200 focus:ring focus:ring-gray-600/40"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
