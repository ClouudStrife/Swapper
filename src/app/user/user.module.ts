import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MainModule } from '../main/main.module';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { UserMainComponent } from '../user-main/user-main.component';
import { UserMainProductsComponent } from '../user-main-products/user-main-products.component';
import { ProductRegisterComponent } from '../product-register/product-register.component';


@NgModule({
  imports: [
    CommonModule,
    MainModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserMainComponent,
    UserMainProductsComponent,
    ProductRegisterComponent
  ],

  exports: [
    UserComponent
  ]
})
export class UserModule { }
