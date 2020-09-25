import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input()
  movie: Movie;

  @Output()
  movieSelected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }
}
