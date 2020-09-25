import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieHighlighterDirective } from './movie-highlighter.directive';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieHighlighterDirective,
    MovieItemComponent,
    MoviesSearchComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieHighlighterDirective,
    MovieItemComponent,
    MoviesSearchComponent,
  ],
})
export class MoviesModule {}
