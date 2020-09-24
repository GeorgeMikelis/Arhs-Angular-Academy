import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-academy';
  userInput: string;

  @Input()
  selectedMovieTitle: string;

  @Input()
  buttonWasClicked: boolean;

  onSearch(eventData: any) {
    console.log(eventData);
    this.userInput = eventData;
  }
}
