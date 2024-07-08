export interface Continent {
    id: number;
    name: string;
  }
  
  export interface Country {
    id: number;
    name: string;
    code: string;
    emoji: string;
    continent?: Continent | null;
  }
  