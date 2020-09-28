import { Injectable } from '@angular/core';

import * as Movies from '../movies/data/movies';
import { Movie } from '../movies/movies-list/movie';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getAllMovies(): Movie[] {
    return Movies.movies;
  }

  getFeaturedMovies() {
    let mov: Movie[] = Movies.movies.filter(movie => {
      return movie.featured === true;
    })
    return mov;
  }
}
