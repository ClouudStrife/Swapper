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
import { UserMainAnunciosComponent } from '../user-main-anuncios/user-main-anuncios.component';
import { ListaProdutosComponent } from '../lista-produtos/lista-produtos.component';
import { AnuncioRegistroComponent } from '../anuncio-registro/anuncio-registro.component';



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
    ProductRegisterComponent,
    UserMainAnunciosComponent,
    ListaProdutosComponent,
    AnuncioRegistroComponent
  ],

  exports: [
    UserComponent
  ]
})
export class UserModule { }
