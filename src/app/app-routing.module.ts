import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },//ESTO ES LO PRIMERO QUE MOSTRARA LA APLICACION (POR DEFECTO)

// ORDENAR LOS DEMAS ELEMENTOS
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tarifa',
    loadChildren: () => import('./tarifa/tarifa.module').then( m => m.TarifaPageModule)
  },
  {
    path: 'info-taxi',
    loadChildren: () => import('./info-taxi/info-taxi.module').then( m => m.InfoTaxiPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
