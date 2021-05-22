import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        //loadChildren:'../../tab1/tab1.module#Tab1PageModule'
        loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('../../contactos/contactos.module').then(m => m.ContactosPageModule)
      },
      {
        path: 'chatroom',
        loadChildren: () => import('../../chatroom/chatroom.module').then(m => m.ChatroomPageModule)
      },
      {

        path: 'profile',
        loadChildren: () => import('../../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'service-detail',
        loadChildren: () => import('../../pages/service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../../pages/services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
