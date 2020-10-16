import { createReducer, on } from "@ngrx/store";
import { deleteMovie } from "./movies.actions";

const initState = {
  movies: [{ title: "charis" }],
};
export const moviesReducer = createReducer(
  initState,
  on(deleteMovie, (state) => {
    console.log(state);
    return state;
  })
);
