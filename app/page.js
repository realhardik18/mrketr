export default function Page() {
  return (
    <div className="min-h-screen bg-[#000] text-white flex flex-col justify-between px-6 sm:px-12 py-10">
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-xl w-full text-center sm:text-left space-y-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter leading-tight">
            We Build No BS Applications
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-white font-sans leading-relaxed">
            Your favorite builders behind actually useful applications.
          </p>
          <a
            href="mailto:Mrketrlabs@gmail.com"
            className="inline-block mt-4 rounded-full border border-gray-300 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white font-mono transition hover:bg-gray-700"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-6 text-center">
        <p className="text-xs sm:text-sm text-white font-mono">© 2025 MRKETR Labs Inc.</p>
      </div>
    </div>
  );
}
