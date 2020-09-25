import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Movie } from './movies/movies-list/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-academy';
  movieToSearch: string;

  @Output()
  userInput = new EventEmitter<string>();

  @Input()
  selectedMovie: Movie;
}
