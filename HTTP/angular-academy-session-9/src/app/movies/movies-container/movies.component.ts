import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
@Input()
selectedMovie;
  constructor() { }

  ngOnInit(): void {
  }

}
