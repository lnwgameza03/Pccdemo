import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:BodyComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'update/:id',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
