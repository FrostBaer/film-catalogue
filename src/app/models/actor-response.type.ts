export interface ActorResponse{
    id: number;
    name: string;
    birthday: string | null;
    deathday: string | null;
    place_of_birth: string | null;
    biography: string;
    profile_path: string | null;
    imdb_id: string;
}