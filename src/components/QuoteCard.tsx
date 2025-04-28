import React from 'react';
import { Quote } from '../types/quote';
import { useAnimation } from '../hooks/useAnimation';

interface QuoteCardProps {
  quote: Quote | null;
  isLoading: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, isLoading }) => {
  const { animationClass } = useAnimation(quote);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-6"></div>
        </div>
      ) : (
        <blockquote className={`space-y-4 ${animationClass}`}>
          <div className="text-teal-500 mb-2">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl font-medium text-gray-800 leading-relaxed">
            {quote?.content || "Loading quote..."}
          </p>
          {quote?.author && (
            <footer className="mt-4">
              <p className="text-base text-gray-600">
                — <cite>{quote.author}</cite>
              </p>
            </footer>
          )}
        </blockquote>
      )}
    </div>
  );
};

export default QuoteCard;