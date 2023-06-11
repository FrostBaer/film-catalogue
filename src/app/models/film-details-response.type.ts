import { Genre } from "./genre.type";

export interface FilmDetailsResponse{
    id: number;
    poster_path: string | null;
    genres: Genre[];
    release_date: string; //movie
    first_air_date: string; //tv
    imdb_id: string | null; //movie
    title: string; // movie
    name: string; // tv
    vote_average: number;
    vote_count:  number;
    overview: string | null;
    tagline: string | null;
    number_of_episodes: number;
    number_of_seasons: number;
    original_title: string; //movie
    original_name: string; //tv
}