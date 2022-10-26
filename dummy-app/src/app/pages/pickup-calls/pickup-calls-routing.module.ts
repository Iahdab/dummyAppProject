import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickupCallCardComponent } from 'src/app/ccomponents/pickup-call-card/pickup-call-card.component';

import { PickupCallsPage } from './pickup-calls.page';

const routes: Routes = [
  {
    path: '',
    component: PickupCallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupCallsPageRoutingModule {}
