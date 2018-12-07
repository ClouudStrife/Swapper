import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserMainComponent } from './user-main/user-main.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { AnuncioRegistroComponent } from './anuncio-registro/anuncio-registro.component';



const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'userLogin', component: UserComponent },
  { path: 'userRegister', component: UserRegisterComponent},
  { path: 'userMain', component: UserMainComponent},
  { path: 'productRegister', component: ProductRegisterComponent},
  { path: 'anuncios/:categoria', component: AnunciosComponent},
  { path: 'lista/:var/:idOptional', component: AnuncioRegistroComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent
  ],
  
  imports: [
    BrowserModule,
    UserModule,
    MainModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
