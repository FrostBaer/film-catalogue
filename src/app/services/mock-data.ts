import { Actor } from "../models/actor.type";
import { Film } from "../models/film.type";

export const FILMS: Film[]=[
    { id: 1, title: "The Transporter", genre: "action-thriller", year: 2002, rating: 6.8, castIds: [1], 
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Transporterposter.jpg", imdb:  "https://www.imdb.com/title/tt0293662/", episodes: ['1', '2', '3']},
    
    { id: 2, title: "Shut up!", genre: "comedy-crime", year: 2003, rating: 7.1, castIds: [2], 
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/Tais-toi_poster.jpg", imdb:  "https://www.imdb.com/title/tt0310203/", episodes: ['0']},
    
    { id: 3, title: "Tall Tales", genre: "drama-thriller", year: 2019, rating: 6.9, castIds: [3], 
    imageUrl: "https://media.port.hu/images/001/122/218x310/156.jpg", imdb:  "https://www.imdb.com/title/tt7757688/", episodes: ['0']},
];

export const ACTORS: Actor[]=[
    { id: 1, firstName: 'Jason', lastName: 'Statham', birthdate: new Date('1967-7-26'), country: 'England',
    about: 'Jason Statham is an English actor. Typecast as the antihero, he is known for his action-thriller roles and portraying tough, irredeemable, and machiavellian characters.', 
    filmIds: [1, 2, 3], imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UY1200_CR79,0,630,1200_AL_.jpg'},
    
    { id: 2, firstName: 'Jean', lastName: 'Reno', birthdate: new Date('1948-7-30'), country: 'Morocco',
    about: 'Jean Reno is a French actor. He has worked in French, English, Japanese, Spanish and Italian productions; Reno appeared in films such as Godzilla and The Da Vinci Code.', 
    filmIds: [4, 5, 3], imageUrl: 'https://www.mafab.hu/static/thumb/w150/profiles/2014p/292/23/16152_50.jpg'},
    
    { id: 3, firstName: 'Vica', lastName: 'Kerekes', birthdate: new Date('1981-3-28'), country: 'Slovakia',
    about: 'Vica Kerekes is a citizen of Slovakia and is a Hungarian actress and is noted for her various roles in Slovakian, Czech and Hungarian films.', 
    filmIds: [5, 2, 1], imageUrl: 'https://images.mubicdn.net/images/cast_member/298866/cache-71893-1362051620/image-w856.jpg?size=400x'},

    { id: 1, firstName: 'Jason', lastName: 'Statham', birthdate: new Date('1967-7-26'), country: 'England',
    about: 'Jason Statham is an English actor. Typecast as the antihero, he is known for his action-thriller roles and portraying tough, irredeemable, and machiavellian characters.', 
    filmIds: [1, 2, 3], imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UY1200_CR79,0,630,1200_AL_.jpg'},
    
    { id: 2, firstName: 'Jean', lastName: 'Reno', birthdate: new Date('1948-7-30'), country: 'Morocco',
    about: 'Jean Reno is a French actor. He has worked in French, English, Japanese, Spanish and Italian productions; Reno appeared in films such as Godzilla and The Da Vinci Code.', 
    filmIds: [4, 5, 3], imageUrl: 'https://www.mafab.hu/static/thumb/w150/profiles/2014p/292/23/16152_50.jpg'},
    
    { id: 3, firstName: 'Vica', lastName: 'Kerekes', birthdate: new Date('1981-3-28'), country: 'Slovakia',
    about: 'Vica Kerekes is a citizen of Slovakia and is a Hungarian actress and is noted for her various roles in Slovakian, Czech and Hungarian films.', 
    filmIds: [5, 2, 1], imageUrl: 'https://images.mubicdn.net/images/cast_member/298866/cache-71893-1362051620/image-w856.jpg?size=400x'},
];