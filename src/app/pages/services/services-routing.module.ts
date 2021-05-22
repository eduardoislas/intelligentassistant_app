import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesPage } from './services.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesPage
  },
  {
    path: 'services/service-detail',
    loadChildren: () => import('../service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesPageRoutingModule {}
