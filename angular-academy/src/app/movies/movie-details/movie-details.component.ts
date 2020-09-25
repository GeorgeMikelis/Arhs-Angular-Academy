import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movies-list/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input()
  movieDetails: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
