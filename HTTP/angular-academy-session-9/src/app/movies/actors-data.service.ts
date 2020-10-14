import { Injectable } from '@angular/core';
import { Actor } from './actor';

@Injectable({
    providedIn: "root"
})
export class ActorsDataService {
    actors: Actor[] = [];
}