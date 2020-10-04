import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Criteria } from '../criteria';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnChanges {
  movieList: string;
  selectedMovie: Movie;
  movies: Movie[];
  p: number = 1;

  select = new FormControl('Order by');

  constructor(private movService: MoviesService) {}

  @Input()
  sortOption;

  @Input()
  criteria: Criteria = { featured: false };

  @Input()
  searchValue: string;

  @Output()
  movieToDetails = new EventEmitter<Movie>();

  ngOnInit(): void {
    this.movieList = this.criteria.featured ? "Featured Movies:" : "All Movies:";
    this.movies = this.movService.getMovies(this.criteria);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.movies = this.movService.getMovies(this.criteria);
    console.log(changes);
    const filterValue: string = changes.searchValue?.currentValue;
    if (filterValue && filterValue.length) {
      this.movies = [...this.movies.filter(movie => movie.title.toLowerCase().includes(filterValue))];
    } else {
      this.movies = this.movService.getMovies(this.criteria);
    }
    console.log(this.movies);
    //resets the selected movie when a search is done - Optional
    this.emitSelectedMovie(null);
    console.log(this.sortOption);
  }

  emitSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.movieToDetails.emit(movie)
  }

  onOrderSelectionChange(selection: string) {
    console.log(selection);
    this.movService.getMoviesSortedBy(selection, this.movies);
  }
}
