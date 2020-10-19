import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie } from '../movie';
import * as MoviesActions from "../store/movies.actions";
import * as fromApp from '../store/movies.reducer';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movieList: Observable<{ movieList: Movie[] }>;

  constructor(private store: Store<fromApp.State>) {}

  ngOnInit(): void {
    this.movieList = this.store.select('movies');
  }

  deleteMovie() {
  }
}
