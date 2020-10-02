import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthUsersGuard } from './auth-users.guard';
import { FirstComponentComponent } from './movies/test-components/first-component.component';
import { SecondComponentComponent } from './movies/test-components/second-component.component';

const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponentComponent,
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
