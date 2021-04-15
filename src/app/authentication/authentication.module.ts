import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { StatModule } from '../shared/modules/stat/stat.module';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterNewUserComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    StatModule
  ]
})
export class AuthenticationModule { }
