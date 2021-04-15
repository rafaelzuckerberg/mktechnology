import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';


const routes: Routes = [
  {
    path: 'new-register-user',
    component: RegisterNewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
