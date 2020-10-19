import { Movie } from "../movie";
import * as MoviesActions from "../store/movies.actions";

export interface State {
  movieList: Movie[];
  movie: Movie;
}

const initState: State = {
  movieList: [
    new Movie(1, "Inception", "16-07-2010"),
    new Movie(2, "Lord of the Rings", "19-12-2001"),
    new Movie(1, "Avengers", "26-04-2019"),
    new Movie(1, "Batman", "18-07-2008"),
  ],
  movie: null
};

export function moviesReducer(
  state: State = initState,
  action: MoviesActions.MoviesActions
) {
  switch (action.type) {
    case MoviesActions.DELETE_MOVIE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
