import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnChanges {

  timesOnChangedCalled: number = 1;

  movieToSearch: string = '';

  movieFound: boolean = false;

  movies: Movie[] = [
    { title: 'Inception' },
    { title: 'Lord Of The Rings' },
    { title: 'Avengers' },
    { title: 'Batman' },
  ];

  @Input()
  movieGiven: string;

  @Output()
  movieSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {

    if (this.timesOnChangedCalled > 2){      // my custom work around: allazw thn timh tou movieToSearch mono ap thn 2h fora pou trexei h onChanges kathws prin
      this.movieToSearch = this.movieGiven;   // dwsei timh o xrhsths to movieToSearch den einai empty string alla object typoy EventEmitter_
        for (let movie of this.movies) {
          if (movie.title.toUpperCase() === this.movieToSearch.toUpperCase()) {
            this.movieFound = true;
          }
        }
    }
    console.log('on changes fired');
    console.log(changes);
    console.log(this.movieToSearch);
    this.timesOnChangedCalled++;
  }
}
