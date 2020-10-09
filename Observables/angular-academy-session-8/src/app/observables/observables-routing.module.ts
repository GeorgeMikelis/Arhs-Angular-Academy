import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables.component';
import { ObservablesTimerComponent } from './observables-timer/observables-timer.component';
import { ObservablesMapComponent } from './observables-map/observables-map.component';
import { ObservablesPipeComponent } from './observables-pipe/observables-pipe.component';
import { ObservablesDataExchangeAComponent } from './observables-data-exchange-a/observables-data-exchange-a.component';
import { ObservablesDataExchangeBComponent } from './observables-data-exchange-b/observables-data-exchange-b.component';
import { ObservablesFormComponent } from './observables-form/observables-form.component';
import { ObservablesStarterComponent } from './observables-starter/observables-starter.component';
import { ObservablesExercise1Component } from './observables-exercise1/observables-exercise1.component';
import { ObservablesExercise2Component } from './observables-exercise2/observables-exercise2.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,
    children: [
      { path: 'observables/starter', component: ObservablesStarterComponent },
      { path: 'observables/timer', component: ObservablesTimerComponent },
      { path: 'observables/map', component: ObservablesMapComponent },
      { path: 'observables/pipe', component: ObservablesPipeComponent },
      {
        path: 'observables/data-exchange-a',
        component: ObservablesDataExchangeAComponent,
      },
      {
        path: 'observables/data-exchange-b',
        component: ObservablesDataExchangeBComponent,
      },
      {
        path: 'observables/forms',
        component: ObservablesFormComponent,
      },
      {
        path: 'observables/exercise1',
        component: ObservablesExercise1Component
      },
      {
        path: 'observables/exercise2',
        component: ObservablesExercise2Component
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesRoutingModule {}
