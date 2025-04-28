import { useEffect, useState } from 'react';
import { Quote } from '../types/quote';

export const useAnimation = (quote: Quote | null) => {
  const [animationClass, setAnimationClass] = useState('opacity-0');
  const [prevQuote, setPrevQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Skip initial animation
    if (!prevQuote && quote) {
      setAnimationClass('opacity-100 transition-opacity duration-500');
      setPrevQuote(quote);
      return;
    }

    // Only animate when quote changes
    if (quote && prevQuote && quote.content !== prevQuote.content) {
      // Fade out
      setAnimationClass('opacity-0 transition-opacity duration-300');
      
      // Then fade in after a short delay
      const timer = setTimeout(() => {
        setAnimationClass('opacity-100 transition-opacity duration-500');
        setPrevQuote(quote);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [quote, prevQuote]);

  return { animationClass };
};