import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styles: [' div { background-color: red; }']
})
export class MovieItemComponent implements OnInit {
  @Output()
  buttonClicked = new EventEmitter<boolean>();

  buttonToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.buttonToggle = !this.buttonToggle;
    this.buttonClicked.emit(this.buttonToggle);
  }
}
