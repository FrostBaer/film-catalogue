import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.type';
import { FilmService } from 'src/app/services/film.service';
import { MessageService } from 'src/app/services/message.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  
})
export class SearchBarComponent implements OnInit {
  @Input() title?: string;
  searchTerm: string = "";
  type: string = ""; //tv or movie
  selectedGenre?: Genre;
  genres: Genre[];

  constructor(private messageService: MessageService,
    private filmService: FilmService, 
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.type.subscribe(
      t => {
        this.type = t;
        this.messageService.add('Ez jött: ' + this.type);
      }
    )
    this.search();
    this.getGenres();
  }

  //TODO: ez alapján lehessen szűrni (legördülő lista?)
  private getGenres() {
    this.filmService.getGenres()
        .subscribe(gen => this.genres = gen.genres);
    this.messageService.add('SearchBarComponent: genre list provided');
  }

  public search(): void{
    this.filmService.updateSearchData(this.searchTerm);
    this.messageService.add('SearchBarComponent: You searched for the term ' + this.searchTerm);
    this.searchTerm = ""; 
  }

  public setType(): void{
    this.filmService.updateType();
  }
}
