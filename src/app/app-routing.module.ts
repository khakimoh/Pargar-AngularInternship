import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './extra/components/error/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: ()=> import('./modules/profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: '**',
    component: Page404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
