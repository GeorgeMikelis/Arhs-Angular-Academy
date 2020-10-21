import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  data: Movie[] = [
    { title: 'inception' },
    { title: 'the godfather' },
    { title: 'batman' },
    { title: 'superman' },
    { title: 'superman2' },
  ];
  constructor() {}

  fetchMovies() {
    return of(this.data).pipe(timeout(1000));
  }

  createMovie(movieTitle) {
    const newMovie = { title: movieTitle}
    this.data.push(newMovie);
    return of(newMovie).pipe(timeout(1000));
  }

  deleteMovie(movieTitle) {
    const movieToDelete = { title: movieTitle}
    console.log('deleteMovie service method called')
    this.data = this.data.filter(movie => !movie.title.includes(movieTitle) )
    // return of(movieTitle).pipe(timeout(1000));
    return of(this.data).pipe(timeout(1000));
  }

  updateMovie(movieTitle, newTitle) {
    this.data.find(movie => movie.title === movieTitle).title = newTitle;
    console.log(this.data)
    const updatedMovie = { title: newTitle};
    // return of(updatedMovie).pipe(timeout(1000));
    return of(this.data).pipe(timeout(1000));
  }

  searchMovies(searchTerm: string) {
    const filteredMovies = this.data.filter((movie) => {
      return movie.title.includes(searchTerm);
    });

    return of(filteredMovies);
  }
}
