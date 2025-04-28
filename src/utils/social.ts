export const shareOnTwitter = (quote: string, author: string) => {
  const text = encodeURIComponent(`"${quote}" — ${author}`);
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, '_blank');
};