export interface Quote {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
}
export interface ExampleIntialState {
  quotes: Quote[];
  error: string;
  loading: boolean;
  counter?: Number;
}
