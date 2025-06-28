import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image src="/globe.svg" alt="TechPremi Logo" width={40} height={40} className="text-orange-600" />
              <span className="text-xl font-bold text-gray-900">TechPremi.Com</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Discover Amazing
              <span className="text-orange-600 block">Web Tools</span>
              for Everyone
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore our collection of free, professional web applications designed to make your life easier. 
              No registration required, completely free, and ready to use instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Rent Agreement */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rent Agreement Generator</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Create professional, legally compliant rental agreements in minutes. Step-by-step wizard with no registration required.</p>
              <a href="https://rentagreement.techpremi.com" className="inline-block w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                Generate Agreement
              </a>
            </div>

            {/* Dice Roller */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎲</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Dice Roller</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">A fun, interactive dice roller for games, decisions, and entertainment. Multiple dice types and customization options.</p>
              <a href="https://rolladice.techpremi.com/" className="inline-block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                Roll Dice
              </a>
            </div>

            {/* Gratitude App */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gratitude App</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Recognize and appreciate others to boost morale, build trust, and create a positive culture. Start appreciating someone today!</p>
              <a href="https://gratitude.techpremi.com/" className="inline-block w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Appreciating
              </a>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-8 py-4 border border-orange-200">
              <span className="text-orange-700 font-semibold text-lg">🚀 More amazing tools coming soon!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose TechPremi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Generate results in seconds, not minutes. Our optimized tools work instantly.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Secure</h3>
              <p className="text-gray-600">Your data stays private. No registration, no personal information required.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">Professional-grade tools with enterprise-level features, completely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/globe.svg" alt="TechPremi Logo" width={32} height={32} className="text-white" />
                <span className="text-xl font-bold">TechPremi.Com</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover amazing web tools designed to make your life easier. Professional applications, completely free.
              </p>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-400">100% Free & Secure</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Support & Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Legal Disclaimer</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Sample Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-lg">Need Help?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our tools are designed to be user-friendly. For specific advice, please consult with a professional.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TechPremi.Com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
