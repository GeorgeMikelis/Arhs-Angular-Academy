import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, Observable, of } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";
import { MoviesService } from "../movies.service";
import * as MoviesActions from "../store/movies.actions";

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.fetchMovies),
      switchMap(() =>
        this.moviesService.fetchMovies().pipe(
          map((movies) => MoviesActions.fetchMoviesSuccess({ movies })),
          catchError(() => of(MoviesActions.fetchMoviesError()))
        )
      )
    )
  );

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.searchMovies),
      switchMap(({ title }) =>
        this.moviesService
          .searchMovies(title)
          .pipe(map((movies) => MoviesActions.fetchMoviesSuccess({ movies })))
      )
    )
  );

  updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.updateMovie),
      switchMap(({ title, newTitle }) =>
        this.moviesService.updateMovie(title, newTitle).pipe(
          map((movies) => MoviesActions.fetchMoviesSuccess({ movies })),
          catchError(() => of(MoviesActions.fetchMoviesError()))
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.deleteMovie),
      switchMap((title) =>
        this.moviesService.deleteMovie(title).pipe(
          map((movies) => MoviesActions.fetchMoviesSuccess({ movies })),
          catchError(() => of(MoviesActions.fetchMoviesError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
