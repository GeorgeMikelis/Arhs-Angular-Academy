import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Actor } from './actor';
import { Movie } from './movie';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [
      { id: 1, title: 'Inception', dateReleased: '16-07-2010' },
      { id: 2, title: 'Lord of the Rings', dateReleased: '19-12-2001' },
      { id: 3, title: 'Avengers', dateReleased: '26-04-2019' },
      { id: 4, title: 'Batman', dateReleased: '18-07-2008' },
    ];
    const actors: Actor[] = [
      { id: 1, name: 'Leonardo DiCaprio', age: 45, movie: 'Inception' },
      { id: 2, name: 'Tom Hardy', age: 43, movie: 'Inception' },
      { id: 3, name: 'Ellen Page', age: 33, movie: 'Inception' },
      { id: 4, name: 'Elijah Wood', age: 39, movie: 'Lord of the Rings' },
      { id: 5, name: 'Viggo Mortensen', age: 61, movie: 'Lord of the Rings' },
      { id: 6, name: 'Liv Tyler', age: 43, movie: 'Lord of the Rings' },
      { id: 7, name: 'Christian Bale', age: 46, movie: 'Batman' },
      { id: 8, name: 'Michael Caine', age: 87, movie: 'Batman' },
      { id: 9, name: 'Liam Neeson', age: 68, movie: 'Batman' },
      { id: 0, name: 'Robert Downey Jr.', age: 55, movie: 'Avengers' },
      { id: 11, name: 'Scarlett Johansson', age: 35, movie: 'Avengers' },
      { id: 12, name: 'Chris Evans', age: 39, movie: 'Avengers' }
    ];
    return { movies };
  }
}
