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


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'userLogin', component: UserComponent },
  { path: 'userRegister', component: UserRegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
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
