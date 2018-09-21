import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { BodyMainComponent } from '../body-main/body-main.component';
import { CategoriasMainComponent } from '../categorias-main/categorias-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],

  declarations: [
    MainComponent,
    HeaderComponent,
    BodyMainComponent,
    CategoriasMainComponent,
  ],

  exports: [
    MainComponent,
    HeaderComponent,
    FontAwesomeModule,
  ]

})
export class MainModule { 
}
