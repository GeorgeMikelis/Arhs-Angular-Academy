import { createAction, props } from '@ngrx/store';
import { Movie } from '../movie';

export const fetchMovies = createAction('[Movies] fetch');

export const fetchMoviesSuccess = createAction(
  '[Movies] fetch success',
  props<{ movies: Movie[] }>()
);

export const fetchMoviesError = createAction('[Movies] fetch error');

export const crossMovie = createAction(
  '[Movies] Cross',
  props<{ movieTitle: string }>()
);

export const deleteMovie = createAction(
  '[Movies] Delete',
  props<{ movieTitle: string }>()
);

export const searchMovies = createAction(
  '[Movies] search movies',
  props<{ title: string }>()
);

export const updateMovie = createAction(
  '[Movies] update movie',
  props<{ title: string, newTitle: string }>()
);


