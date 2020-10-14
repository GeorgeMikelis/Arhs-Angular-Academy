import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MoviesService } from "../movies.service";
import { UserInfo } from "../user-info";

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

  user: UserInfo;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.user = this.form.value;
    console.warn(this.user);
    this.moviesService.sendUserInfo(this.user).subscribe((user) => {
      console.log(user);
    });
  }
}
