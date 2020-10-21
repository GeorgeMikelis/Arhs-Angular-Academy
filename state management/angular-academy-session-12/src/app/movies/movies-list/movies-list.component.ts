import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import * as MoviesActions from '../store/movies.actions';
import { moviesSelector } from '../store/movies.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movieTitle = '';
  searchTerm = '';
  movies$: Observable<Movie[]>;
  isUpdateActivated = false;
  movieToBeUpdated: Movie;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MoviesActions.fetchMovies());
    this.movies$ = this.store.select(moviesSelector);
  }

  createMovie(movieTitle) {

  }

  showUpdateForm(movie: Movie) {
    this.movieToBeUpdated = {...movie};
    this.isUpdateActivated = true;
  }

  updateMovie(updateForm) {
    const update = {
      title: this.movieToBeUpdated.title,
      newTitle: updateForm.value
    };

    this.store.dispatch(MoviesActions.updateMovie(update));

    this.isUpdateActivated = false;
    this.movieToBeUpdated = null;
  }

  crossMovie(movieTitle: string) {
    const crossMovieObj = MoviesActions.crossMovie({ movieTitle });
    this.store.dispatch(crossMovieObj);
  }

  deleteMovie(movieTitle: string) {
  }

  searchMovies(searchTerm: string) {
    this.store.dispatch(MoviesActions.searchMovies({ title: searchTerm }));
  }
}
