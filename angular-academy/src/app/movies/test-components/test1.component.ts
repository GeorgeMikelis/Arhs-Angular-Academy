import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './test1.component.html'
})
export class Test1Component implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  params: Params;
  paramsString;

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.paramMap["params"]
    console.log(this.params);
    console.log(typeof(this.params));
    this.paramsString = JSON.stringify(this.params);
    console.log(this.paramsString);
  }

}
