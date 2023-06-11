export interface Cast{
    id: number;
    cast: ActorResult[];
}

export interface ActorResult{
    id: number;
    known_for_department: string;
    name: string;
    character: string;
    profile_path: string; //profil pic
}