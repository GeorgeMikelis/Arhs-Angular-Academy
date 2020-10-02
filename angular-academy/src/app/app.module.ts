import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthUsersGuard } from './auth-users.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  exports: [NgxPaginationModule, AppRoutingModule],
  providers: [AuthUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
