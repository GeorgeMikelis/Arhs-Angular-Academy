import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.form.value);
  }
}
