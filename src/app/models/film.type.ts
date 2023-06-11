export interface Film{
    id: number;
    title: string;
    genre: string;
    year: number;
    rating: number;
    castIds: number[];
    imageUrl: string;
    imdb: string;
    episodes: string[];
}