import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public filmsUrl = 'https://api.themoviedb.org/3/';
  public apiKey = '?api_key=20f0af1248bdd7c4945417e58ebc5aae';
  public option = "&page=1";
  //ezt a route-ból kellene venni
  public type = new BehaviorSubject<string>("tv");

  constructor(private messageService: MessageService) { }

  //path: path after base url
  //userOptions: optional settings
  public createUrl(path: string, userOptions?: string): string{
    userOptions = userOptions ? userOptions : "";
    path = this.filmsUrl + path + this.apiKey + this.option + userOptions;
    this.log('URL created: ' + path);
    return path;
  }

  public setType(){  
    this.type.next(this.type.getValue() == "tv" ? "movie" : "tv");
    this.log('new type: ' + this.type.getValue());
  }

  public log(message: string) {
    this.messageService.add('SharedService:' + message);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(name: string, operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(name + ': ' + `${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
