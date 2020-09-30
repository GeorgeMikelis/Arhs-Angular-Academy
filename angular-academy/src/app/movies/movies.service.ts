import { Injectable } from '@angular/core';

import { Criteria } from './criteria';
import { allMovies } from './data/movies';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  allMovies: Movie[] = JSON.parse(JSON.stringify(allMovies));

  movies: Movie[];

  getMovies(criteria: Criteria): Movie[] {
    if (criteria.featured) {
      this.movies = [
        ...this.allMovies.filter((movie) => movie.featured === true),
      ];
    } else {
      this.movies = [...this.allMovies];
    }
    return this.movies;
  }

  sortBy(sortOption: string): Movie[] {
    switch (sortOption) {
      case 'date':
      case 'alphabetical':
      default:
        this.movies = [...this.allMovies];
        return this.movies
    }
  }
}
