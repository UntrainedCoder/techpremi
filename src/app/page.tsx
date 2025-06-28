import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image src="/globe.svg" alt="TechPremi Logo" width={40} height={40} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechPremi.Com</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Professional
              <span className="text-blue-600 block">Web Apps</span>
              in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate useful tools and applications with our intuitive step-by-step wizards. 
              No registration required, completely free, and ready to use instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Developers & Users Worldwide</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rent Agreement */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Generate Rent Agreement</h3>
              <p className="text-gray-600 mb-6">Create legal rent agreements in minutes with our step-by-step wizard. No registration required.</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Creating
              </button>
            </div>

            {/* Dice Roller */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Roll a Dice</h3>
              <p className="text-gray-600 mb-6">A fun, digital dice roller for games and decisions. Multiple dice types available.</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Roll Now
              </button>
            </div>

            {/* AI Audit Assistant */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Audit Assistant</h3>
              <p className="text-gray-600 mb-6">Get AI-powered insights and audits for your documents and projects.</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Start Audit
              </button>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-100 rounded-full px-6 py-3">
              <span className="text-gray-600 font-medium">🚀 More apps coming soon!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/globe.svg" alt="TechPremi Logo" width={32} height={32} className="text-white" />
                <span className="text-xl font-bold">TechPremi.Com</span>
              </div>
              <p className="text-gray-400 mb-4">
                Create legal documents and useful tools easily. Generate professional applications with our step-by-step wizards.
              </p>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-400">100% Free & Secure</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support & Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sample Apps</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-4">
                This tool helps you create useful applications. Please consult with a professional for specific advice.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TechPremi.Com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
