import { Injectable } from '@angular/core';
import { Film } from '../models/film.type';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FilmResponse } from '../models/film-response.type';
import { FilmDetailsResponse } from '../models/film-details-response.type';
import { GenreResponse } from '../models/genre.type';
import { MessageService } from './message.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public searchTerm = new BehaviorSubject<string>("");

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private sharedService: SharedService) { }

  public getFilms(): Observable<Film[]> {
    let url = this.sharedService.createUrl("discover/tv");
    let valami = this.http.get<Film[]>(url)
      .pipe(
        tap(_ => this.log('fetched films by URL ' + url)),
        catchError(this.sharedService.handleError<Film[]>('FilmService', 'getFilms', []))
      );
    this.log('fetched films: ' + JSON.stringify(valami));
    return valami;
  }

  //ha nincs searchterm, akkor csak simán lekér
  //TODO: mire vonatkozzon a searchTerm (default: )
  public getFilmsResponse(): Observable<FilmResponse> {
    let url = "discover/" + this.sharedService.type.getValue();
    url = this.sharedService.createUrl(url, this.searchTerm.getValue());

    this.log('fetching films...');
    let film = this.http.get<FilmResponse>(url)
      .pipe(
        tap(_ => this.log('fetched films by URL ' + url)),
        catchError(this.sharedService.handleError<FilmResponse>('FilmService', 'getFilms error'))
      );
    this.log('fetched films: ' + typeof (film) + Object.keys(film).length);
    return film;
  }

  public getFilmsResponseById(id: number | string): Observable<FilmDetailsResponse> {
    let url = this.sharedService.createUrl(this.sharedService.type.getValue() + "/" + id);
    this.log('fetching film details...');

    return this.http.get<FilmDetailsResponse>(url)
      .pipe(
        tap(_ => this.log('fetched films by URL: ' + url)),
        catchError(this.sharedService.handleError<FilmDetailsResponse>('FilmService', 'getFilmsResponseById error'))
      );
  }

  //type has to be TV or MOVIE
  public getGenres(): Observable<GenreResponse> {
    let url = this.sharedService.createUrl("genre/" + this.sharedService.type.getValue() + "/list");
    return this.http.get<GenreResponse>(url)
      .pipe(
        tap(_ => this.log('fetched genres by URL: ' + url)),
        catchError(this.sharedService.handleError<GenreResponse>('FilmService', 'getGenres error'))
      );
  }

  public updateSearchData(searchTerm: string): void {
    this.searchTerm.next(searchTerm);
    this.log(' new data arrived ');
  }

  public updateType() {
    this.sharedService.setType();
  }

  private log(message: string) {
    this.messageService.add('FilmService:' + message);
  }
}