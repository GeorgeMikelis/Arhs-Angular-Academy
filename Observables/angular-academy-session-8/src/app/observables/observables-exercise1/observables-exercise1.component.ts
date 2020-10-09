import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables-exercise1',
  templateUrl: './observables-exercise1.component.html',
  styleUrls: ['./observables-exercise1.component.css']
})
export class ObservablesExercise1Component implements OnInit, AfterViewInit, OnDestroy {
  input = '';
  keyDownObservable: Observable<KeyboardEvent>;
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.keyDownObservable = fromEvent<KeyboardEvent>(document, 'keydown');
    this.subscription = this.keyDownObservable.subscribe(key => {
      console.log(key);
      if(key.code === 'Escape' ) {
        this.input = '';
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
