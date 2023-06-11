import { Component, OnInit } from '@angular/core';
import { FilmResponse, FilmResult } from 'src/app/models/film-response.type';
import { FilmService } from 'src/app/services/film.service';
import { MessageService } from 'src/app/services/message.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  filmsResponse: FilmResponse;
  selectedFilm: FilmResult;
  type: string = "";
  searchTerm: string = "";

  constructor(private filmService: FilmService,
    private sharedService: SharedService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.filmService.searchTerm.subscribe(
      st => {
        this.searchTerm = st;
        this.getFilmResponse();
      }
    )
    this.sharedService.type.subscribe(
      t => this.getFilmResponse()
    )
  }

  public getFilmResponse(): void{
    this.filmService.getFilmsResponse()
        .subscribe(fr => this.filmsResponse = fr);
    this.messageService.add('FilmListComponent: film response provided');
  }
}
