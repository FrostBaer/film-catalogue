import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { FilmDetailsResponse } from 'src/app/models/film-details-response.type';
import { Cast } from 'src/app/models/cast.type';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film$: Observable<FilmDetailsResponse>;
  cast$: Observable<Cast[]>;
  type: string = "tv";
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService,
    private sharedService: SharedService,
    private  messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getFilmResponse();
  }
    
  private getFilmResponse(): void{
    this.film$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.filmService.getFilmsResponseById(params.get('id')))
    );
    this.messageService.add('FilmDetailsComponent: film response provided');
  }
}
