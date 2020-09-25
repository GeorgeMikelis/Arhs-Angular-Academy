import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  userInput = new EventEmitter<any>();
}
