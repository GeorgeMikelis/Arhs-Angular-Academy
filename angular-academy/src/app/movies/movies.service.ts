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

  getMoviesSortedBy(sortOption: string, movies: Movie[]): Movie[] {
    console.log('getMoviesSortedBy was called');
    switch (sortOption) {
      case 'date':
        return movies.sort((a, b) => a.yearRelease - b.yearRelease);
      case 'alphabetical':
        movies.sort((a, b) => {
          if(a.title < b.title) { return -1; }
          if(a.title > b.title) { return 1; }
          return 0;
        });
        return movies;
      default:
        this.movies = [...this.allMovies];
        return this.movies;
    }
  }
}
