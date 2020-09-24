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

  movies: Movie[] = [
    { title: 'Inception' },
    { title: 'Lord Of The Rings' },
    { title: 'Avengers' },
    { title: 'Batman' },
  ];

  @Input()
  set buttonClicked(value: boolean){
    this._buttonClicked = value;
    this.buttonWasClicked.emit(value);
  }
  get buttonClicked(): boolean {
   return this._buttonClicked;
  }

  @Output()
  buttonWasClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  movieSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
