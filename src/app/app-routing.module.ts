import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'search', component: FilmsListComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'actor/:id', component: ActorDetailsComponent },  
  { path: '', redirectTo: '/search', pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
