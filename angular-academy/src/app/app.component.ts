import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-academy';

  @Output()
  userInput = new EventEmitter<any>();

  @Input()
  selectedMovieTitle: string;

  @Input()
  buttonWasClicked: boolean;
}
