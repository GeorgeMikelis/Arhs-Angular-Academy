import { Component, OnInit, Testability } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-observables-exercise2",
  templateUrl: "./observables-exercise2.component.html",
  styleUrls: ["./observables-exercise2.component.css"],
})
export class ObservablesExercise2Component implements OnInit {
  inputWithSuggestionProposition = new FormControl("");
  words: string[] = require("an-array-of-english-words");
  suggestions: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.words.filter((d) => /fun/.test(d)));
    this.inputWithSuggestionProposition.valueChanges.forEach(
      (value: string) => {
        this.suggestions.push(value);
        console.log(this.suggestions);
        if (value.length > 2) {
          this.suggestions = [];
          for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].substr(0, value.length).toUpperCase() == value.toUpperCase()) {
              console.log(this.words[i])
              this.suggestions.push(this.words[i]);
            }
          }
          console.log(value);
        }
      }
    );
  }
}
