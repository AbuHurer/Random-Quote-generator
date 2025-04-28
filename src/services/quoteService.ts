import { Quote, QuoteAPIResponse } from '../types/quote';

// Fallback quotes in case API fails
const fallbackQuotes: Quote[] = [
  {
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    content: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];

export const getRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch('https://api.quotable.io/random', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: QuoteAPIResponse = await response.json();
    
    return {
      content: data.content,
      author: data.author,
      tags: data.tags
    };
  } catch (error) {
    console.warn('Falling back to local quotes due to API error:', error instanceof Error ? error.message : 'Unknown error');
    // Return a random fallback quote if API fails
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
  }
};

export const getRandomFallbackQuote = (): Quote => {
  return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
};