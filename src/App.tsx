import React from 'react';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-amber-50">
      <header className="w-full max-w-4xl mx-auto mb-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-700">
          Inspirational Quotes
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Discover wisdom with a new quote each time
        </p>
      </header>
      
      <main className="w-full max-w-4xl mx-auto px-4 flex-1 flex items-center justify-center">
        <QuoteGenerator />
      </main>
      
      <footer className="w-full py-4 mt-8 text-center text-gray-500 text-sm">
        <p>© 2025 Quote Generator | Powered by Quotable API</p>
      </footer>
    </div>
  );
}

export default App;