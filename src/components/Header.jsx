export default function Header() {
    return (
      <>
        {/* Hero Section: Centered with Simple Header */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
          {/* Main Header */}
          <header
            id="page-header"
            className="relative flex flex-none items-center py-8"
          >
            {/* Main Header Content */}
            <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
                <div className="flex items-center gap-2">
                <img
                    src="src\assets\logo.png"
                    alt="CropY Logo"
                    className="h-8 w-8"
                />
                <a
                    href="#"
                    className="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                >
                    <span>CropY</span>
                </a>
                </div>
                <nav className="space-x-3 md:space-x-6">
                <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400"
                >
                    <span>About</span>
                </a>
                <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400"
                >
                    <span>Predict</span>
                </a>
                <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400"
                >
                    <span>Group</span>
                </a>
                </nav>
            </div>
            {/* END Main Header Content */}
          </header>
          {/* END Main Header */}
  
          {/* Hero Content */}
          <div className="relative container mx-auto px-4 py-12 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="text-center">
              <h1 className="mb-4 text-5xl font-black text-black dark:text-white">
                Crop Yield{" "}
                <span className="text-emerald-600 dark:text-emerald-500">
                  Prediction
                </span>
              </h1>
              <h2 className="mx-auto text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 dark:text-gray-300">
              Forecast crop yields with precision using advanced AI technology.
              </h2>
            </div>
            <div className="flex flex-col gap-2 pt-10 pb-28 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-emerald-700 px-7 py-3.5 leading-6 font-semibold text-white hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring focus:ring-emerald-400/50 active:border-emerald-700 active:bg-emerald-700 dark:focus:ring-emerald-400/90"
              >
                <span>Predict Now</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 leading-6 font-semibold text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Centered with Simple Header */}
      </>
    );
  }
  