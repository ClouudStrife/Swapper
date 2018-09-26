import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MainModule } from '../main/main.module';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MainModule,
    RouterModule
  ],
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],

  exports: [
    UserComponent
  ]
})
export class UserModule { }
