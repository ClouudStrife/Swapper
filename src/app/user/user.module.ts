import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../header/header.component';
import { MainModule } from '../main/main.module';
import { UserLoginComponent } from '../user-login/user-login.component';



@NgModule({
  imports: [
    CommonModule,
    MainModule
  ],
  declarations: [
    UserComponent,
    UserLoginComponent
  ],

  exports: [
    UserComponent
  ]
})
export class UserModule { }
