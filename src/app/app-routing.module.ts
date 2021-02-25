import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**
   * 
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  
  
  {
    path: 'tab2',
    loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'explore-container',
    loadChildren: () => import('./pages/explore-container/explore-container.module').then( m => m.ExploreContainerPageModule)
  },
   * 


    {
    path: 'tab1',
    loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule)
  },

   * 
   */

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)

  },


  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
