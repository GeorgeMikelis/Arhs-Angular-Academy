import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  exports: [NgxPaginationModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
