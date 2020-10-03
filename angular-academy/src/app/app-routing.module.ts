import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthUsersGuard } from './auth-users.guard';
import { Test1Component } from './movies/test-components/test1.component';
import { SecondComponentComponent } from './movies/test-components/second-component.component';

const routes: Routes = [
  {
    path: 'test1-component',
    component: Test1Component,
    pathMatch: 'prefix'
  },
  {
    path: 'second-component/:id',
    component: SecondComponentComponent,
    pathMatch: 'prefix',
    canActivate: [AuthUsersGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
