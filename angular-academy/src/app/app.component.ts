import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie } from './movies/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-academy';
  movieSearchValue: string;

  selectedMovie: Movie;

  handleInput(value: string) {
    console.log(value);
    this.movieSearchValue = value;
  }

  selectMovie(movie: Movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }

  name = new FormControl('');

  updateName() {
    this.name.setValue('George');
  }
}
