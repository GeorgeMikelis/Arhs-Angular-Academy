import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  private _buttonClicked: boolean;
  public _movieToSearch: string;

  movieFound: boolean = false;

  movies: Movie[] = [
    { title: 'Inception' },
    { title: 'Lord Of The Rings' },
    { title: 'Avengers' },
    { title: 'Batman' },
  ];

  @Input()
  set buttonClicked(value: boolean) {
    this._buttonClicked = value;
    this.buttonWasClicked.emit(value);
  }
  get buttonClicked(): boolean {
   return this._buttonClicked;
  }

  @Input()
  set movieToSearch(value: string) {
    this._movieToSearch = value;
    for (let movie of this.movies) {
      if (movie.title.toUpperCase() === this._movieToSearch.toUpperCase()) {
        this.movieFound = true;
      }
    }
  }

  @Output()
  buttonWasClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  movieSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
