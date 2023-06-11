import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActorResponse } from 'src/app/models/actor-response.type';
import { ActorService } from 'src/app/services/actor.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  actor: ActorResponse;
  
  constructor(private actorService: ActorService,
    private route: ActivatedRoute,
    private router: Router,
    private  messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
      this.getActor(params.get('id'))))
      .subscribe(cast => this.actor = cast);          
    this.messageService.add('ActorDetailsComponent: actor provided');
  }

  private getActor(id: string) {
    this.messageService.add('ActorDetailsComponent: getting cast...');
    return this.actorService.getActorById(id);
  }

}
