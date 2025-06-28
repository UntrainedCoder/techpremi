import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-white to-blue-50 p-6">
      <header className="mb-8 flex flex-col items-center">
        <Image src="/globe.svg" alt="TechPremi Logo" width={64} height={64} className="mb-4" />
        <h1 className="text-4xl font-bold text-blue-700 mb-2">TechPremi.Com</h1>
        <p className="text-lg text-gray-700">A bouquet of simple, useful web apps for everyone</p>
      </header>
      <main className="w-full max-w-xl bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
        <p className="text-center text-gray-600 mb-4">
          Welcome to TechPremi.Com! Soon, you'll find a collection of handy tools and apps here, including:
        </p>
        <ul className="space-y-3 text-gray-800 text-base list-disc list-inside">
          <li><span className="font-semibold text-blue-600">Generate Rent Agreement</span> – Create legal rent agreements in minutes.</li>
          <li><span className="font-semibold text-blue-600">Roll a Dice</span> – A fun, digital dice roller for games and decisions.</li>
          <li><span className="font-semibold text-blue-600">AI Audit Assistant</span> – Get AI-powered insights and audits for your documents.</li>
          <li className="italic text-gray-400">...and more apps coming soon!</li>
        </ul>
      </main>
      <footer className="mt-10 text-gray-400 text-sm">&copy; {new Date().getFullYear()} TechPremi.Com</footer>
    </div>
  );
}
