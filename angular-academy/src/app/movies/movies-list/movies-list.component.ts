import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

import { Movie } from './movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input()
  criteria;

  movies: Movie[];

  ngOnInit(): void {
    this.criteria.featured = false;
    this.movies = this.dBService.getMovies(this.criteria.featured);
  }

  movieKey: number;

  timesSeterCalled: number = 1;

  movieToSearch: string = '';

  movieFound: boolean;

  @Input()
  set movieWasSelected(value: Movie) {
    this.movieToDetails.emit(value);
  }

  @Input()
  set movieGiven(value: string) {
    this.movieFound = false;
    this.movieToSearch = value;
    let counter = 0;
    for (let movie of this.movies) {
      if (
        movie.title.toString().toUpperCase() ===
        this.movieToSearch.toString().toUpperCase()
      ) {
        this.movieFound = true;
        this.movieKey = counter;
      }
      counter++;
    }
  }

  @Output()
  movieToDetails = new EventEmitter<Movie>();

  constructor(private dBService: DbService) {}

  isEventEmiter(val): boolean {
    if (typeof val === 'object') {
      return true;
    } else {
      return false;
    }
  }
}
