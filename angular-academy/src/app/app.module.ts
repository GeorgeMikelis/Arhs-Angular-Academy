import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthUsersGuard } from './auth-users.guard';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgxPaginationModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
