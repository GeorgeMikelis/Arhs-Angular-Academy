import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // this.moviesService.getActors().subscribe(actors => {
    //   this.actors = actors;
    //   console.log(this.actors);
    // })
  }

}
