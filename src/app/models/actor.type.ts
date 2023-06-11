export interface Actor{
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    country: string;
    about: string;
    filmIds: number[];
    imageUrl: string; 
}