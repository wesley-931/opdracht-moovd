import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonsRoutingModule} from './persons-routing.module';
import {PersonsComponent} from './persons/persons.component';
import {PersonCardComponent} from './components/person-card/person-card.component';
import {LoadingModule} from '@shared/components/loading/loading.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PersonsComponent, PersonCardComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    LoadingModule,
    FontAwesomeModule,
  ],
})
export class PersonsModule {}
