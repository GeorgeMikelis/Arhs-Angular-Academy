import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

import { Movie } from './movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input("criteria")
  criteria: { featured: false };

  movieKey: number;

  timesSeterCalled: number = 1;

  movieToSearch: string = '';

  movieFound: boolean;

  // movies: Movie[] = [
  //   { title: 'Inception', yearRelease: 2010 },
  //   { title: 'Lord Of The Rings', yearRelease: 2001 },
  //   { title: 'Avengers', yearRelease: 2012 },
  //   { title: 'Batman Begins', yearRelease: 2005 },
  // ];

  movies: Movie[] = this.criteria.featured? this.dBService.getFeaturedMovies : this.dBService.getAllMovies();

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
      if ( movie.title.toString().toUpperCase() === this.movieToSearch.toString().toUpperCase() ) {
        this.movieFound = true;
        this.movieKey = counter;
      }
      counter++;
    }
  }

  @Output()
  movieToDetails = new EventEmitter<Movie>();

  constructor(private dBService: DbService) {}

  ngOnInit(): void {}

  isEventEmiter(val): boolean {
    if (typeof val === 'object') {
      return true;
    } else {
      return false;
    }
  }
}
