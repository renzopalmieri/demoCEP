import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'cep',
    loadChildren: () => import('./cep/cep.module').then(m => m.CepModule)
  }
  ,
  {
    path: '',
    redirectTo: 'cep',
    pathMatch: 'full'
  }



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
