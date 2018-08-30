import { Article } from './Article';

export interface Stock {
  symbol: string;
  companyName: string;
  description: string;
  latestPrice: number;
  changePercent: number;
  open: number;
  high: number;
  low: number;
  volume: number;
  averageVolume: number;
  dividendYield: number;
  week52High: number;
  week52Low: number;
  marketCap: number;
  peRatio: number;
  news?: Article[];
}
