import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Actor } from '../actor';
import { ActorsDataService } from '../actors-data.service';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnChanges {
  movies: Movie[] = [];
  actorsInMovie: Actor[] = [];
  editMovie: Movie; // the movie currently being edited

  @Output()
  movieSelected = new EventEmitter();

  constructor(private moviesService: MoviesService, private actorsDataService: ActorsDataService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnChanges() {}

  actorsCall(movie: Movie) {
    const title = movie.title
    this.moviesService.getActors(title).subscribe(actors => {
      console.log(actors);
      this.actorsInMovie = actors;
      // this.actorsInMovie = actors.filter(actor => actor.movie === movie.title);
      console.log(this.actorsInMovie);
    })
  }

  getMovies(): void {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.movies = movies));
  }

  add(title: string): void {
    this.editMovie = undefined;
    title = title.trim();
    if (!title) {
      return;
    }

    // The server will generate the id for this new movie
    const newMovie: Movie = { title } as Movie;
    this.moviesService
      .addMovie(newMovie)
      .subscribe((movie) => this.movies.push(movie));
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter((h) => h !== movie);
    this.moviesService.deleteMovie(movie.id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.moviesService.deleteMovie(movie.id);
    */
  }

  edit(movie: Movie) {
    this.editMovie = movie;
  }

  update() {
    if (this.editMovie) {
      this.moviesService.updateMovie(this.editMovie).subscribe((movie) => {
        // replace the movie in the movies list with update from server
        const ix = movie ? this.movies.findIndex((m) => m.id === movie.id) : -1;
        if (ix > -1) {
          this.movies[ix] = movie;
        }
      });
      this.editMovie = undefined;
    }
  }
}
