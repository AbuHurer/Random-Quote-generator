import React, { useEffect, useState } from 'react';
import { Quote } from '../types/quote';
import { getRandomQuote } from '../services/quoteService';
import QuoteCard from './QuoteCard';
import ActionButton from './ActionButton';
import { copyToClipboard } from '../utils/clipboard';
import { shareOnTwitter } from '../utils/social';
import { Copy, RefreshCw, Share2 } from 'lucide-react';

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const fetchNewQuote = async () => {
    setIsLoading(true);
    const newQuote = await getRandomQuote();
    setQuote(newQuote);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const handleCopyQuote = async () => {
    if (!quote) return;
    
    const quoteText = `"${quote.content}" — ${quote.author}`;
    const success = await copyToClipboard(quoteText);
    
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleShareOnTwitter = () => {
    if (!quote) return;
    shareOnTwitter(quote.content, quote.author);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-4">
      <QuoteCard quote={quote} isLoading={isLoading} />
      
      <div className="flex flex-wrap justify-center gap-3">
        <ActionButton 
          onClick={fetchNewQuote} 
          icon={<RefreshCw size={18} />} 
          disabled={isLoading}
        >
          New Quote
        </ActionButton>
        
        <ActionButton
          onClick={handleCopyQuote}
          icon={<Copy size={18} />}
          variant="outline"
          disabled={isLoading || !quote}
        >
          {copySuccess ? 'Copied!' : 'Copy Quote'}
        </ActionButton>
        
        <ActionButton
          onClick={handleShareOnTwitter}
          icon={<Share2 size={18} />}
          variant="secondary"
          disabled={isLoading || !quote}
        >
          Share on X
        </ActionButton>
      </div>
    </div>
  );
};

export default QuoteGenerator;