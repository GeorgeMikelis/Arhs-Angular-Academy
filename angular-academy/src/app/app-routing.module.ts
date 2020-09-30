import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  { path: 'all-movies', component: MoviesListComponent },
  { path: 'featured-movies', component: MoviesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
