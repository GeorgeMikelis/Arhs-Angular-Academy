import { Action} from "@ngrx/store";
import { Movie } from '../movie';

export const DELETE_MOVIE = 'DELETE_MOVIE';

export class DeleteMovie implements Action {
    readonly type = DELETE_MOVIE;
    
    constructor(public payload: Movie) {}
}

export type MoviesActions = DeleteMovie;