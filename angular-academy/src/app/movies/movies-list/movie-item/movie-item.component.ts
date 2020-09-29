import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Movie } from '../../movie';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input()
  movie: Movie;

  @Output()
  movieSelected = new EventEmitter<Movie>();

}
