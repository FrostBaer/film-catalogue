import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { CastComponent } from './components/cast/cast.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    ActorDetailsComponent,
    MessagesComponent,
    RecommendationsComponent,
    CastComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
