import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'catagory',
    loadChildren: ()=> import('./modules/catagory/catagory.module').then(mod => mod.CatagoryModule)
  },
  {
    path: '**',
    loadChildren: ()=> import('./modules/template/template.module').then(mod => mod.TemplateModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
