export interface FilmResponse{
    page: number;
    results: FilmResult[];    
    total_results: number;
    total_pages: number;
}

export interface FilmResult{
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    
    first_air_date: string; //tv
    release_date: string; //movie
    
    name: string; //tv
    title: string; //movie

    original_title: string; //tv
    original_name: string; //movie
}