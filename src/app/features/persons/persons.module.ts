import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonsRoutingModule} from './persons-routing.module';
import {PersonsComponent} from './persons/persons.component';
import {PersonCardComponent} from './components/person-card/person-card.component';
import {LoadingModule} from '@shared/components/loading/loading.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PersonDialogComponent} from './components/person-dialog/person-dialog.component';
import {CountrySelectModule} from '@shared/components/country-select/country-select.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '@shared/pipes/pipes/pipes.module';
import {AvatarModule} from '@shared/components/avatar/avatar.module';

@NgModule({
  declarations: [PersonsComponent, PersonCardComponent, PersonDialogComponent],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    LoadingModule,
    FontAwesomeModule,
    CountrySelectModule,
    ReactiveFormsModule,
    PipesModule,
    AvatarModule,
  ],
})
export class PersonsModule {}
