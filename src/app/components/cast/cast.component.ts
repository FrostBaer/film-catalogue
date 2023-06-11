import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Actor } from 'src/app/models/actor.type';
import { ActorResult, Cast } from 'src/app/models/cast.type';
import { ActorService } from 'src/app/services/actor.service';
import { FilmService } from 'src/app/services/film.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  //@Input() type?: string;
  cast$: ActorResult[];
  selectedActor?: Actor;

  constructor(private actorService: ActorService, 
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.getCast(params.get('id'))))
      .subscribe(cast => this.cast$ = cast.cast);          
    this.messageService.add('CastComponent: cast provided');    
  }

  private getCast(id: string) {
    this.messageService.add('CastComponent: getting cast...');
    return this.actorService.getCast(id);
  }
}
