import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ModHelpComponent } from './mod-help/mod-help.component';
import { ModifyComponent } from './modify/modify.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent,
  children: [
    {path: 'delete',component: DeleteComponent},
    {path: 'modify', component: ModifyComponent,
        children: [
          {path: 'help', component: ModHelpComponent}
        ]}
  ]},
  {path:'**',component:PageNotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
