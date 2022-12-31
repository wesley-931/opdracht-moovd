import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonsComponent} from './persons/persons.component';

const routes: Routes = [
  {path: '', component: PersonsComponent},
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsRoutingModule {}
