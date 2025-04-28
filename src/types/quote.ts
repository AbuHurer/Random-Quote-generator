export interface Quote {
  content: string;
  author: string;
  tags?: string[];
}

export interface QuoteAPIResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}