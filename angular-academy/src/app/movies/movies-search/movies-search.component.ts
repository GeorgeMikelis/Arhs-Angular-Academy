import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent{

  @Output()
  userInput = new EventEmitter<string>();
}
