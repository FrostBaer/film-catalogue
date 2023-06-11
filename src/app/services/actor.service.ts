import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActorResponse } from '../models/actor-response.type';
import { Cast } from '../models/cast.type';
import { MessageService } from './message.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(private http: HttpClient,
    private messageService: MessageService,
    private sharedService: SharedService) { }

  public getActorById(id: number | string): Observable<ActorResponse>{
    let url = this.sharedService.createUrl("person/" + id);
    this.log('fetching actor details...');
    
    return this.http.get<ActorResponse>(url)
    .pipe(
      tap(_ => this.log('fetched actor by URL: ' + url)),
      catchError(this.sharedService.handleError<ActorResponse>('ActorService', 'getActorById error'))
    );
  }

  public getCast(id: number | string): Observable<Cast>{
    let url = this.sharedService.createUrl( this.sharedService.type.getValue() + "/" + id + "/credits");
    
    const cast = this.http.get<Cast>(url)  
    .pipe(
      tap(_ => this.log('fetched cast by URL: ' + url)),
      catchError(this.sharedService.handleError<Cast>("ActorService", 'getCast cast error'))
    );

    this.log('fetched cast by ID: ' + id);
    return cast;
  }

  private log(message: string) {
    this.messageService.add('ActorService:' + message);
  }

}
