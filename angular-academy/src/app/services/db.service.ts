import { Injectable } from '@angular/core';

import * as Movies from '../movies/data/movies';
import { Movie } from '../movies/movies-list/movie';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor() {}

  getMovies(criteria: { featured: boolean }) {
    if (criteria.featured) {
      let mov: Movie[] = Movies.movies.filter(movie => {
        return movie.featured === true;
      })
      return mov;
    } else {
      return Movies.movies;
    }
  }
}
