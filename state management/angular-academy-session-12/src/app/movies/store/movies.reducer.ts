import { createReducer, on } from '@ngrx/store';
import { Movie } from '../movie';
import { crossMovie, fetchMoviesSuccess } from './movies.actions';

export interface State {
  items: Movie[];
  x: number;
}

const initState: State = {
  items: [],
  x: 1,
};

export const moviesReducer = createReducer(
  initState,
  on(fetchMoviesSuccess, (state, { movies }) => {
    // The items property was missing below that's why we were getting an error
    console.log('reducer for fetch')
    return {
      ...state,
      items: movies,
    };
  }),

  on(crossMovie, (state, { movieTitle }) => {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.title === movieTitle) {
          return {
            ...item,
            deleted: true,
          };
        }

        return item;
      }),
    };
  })
);
