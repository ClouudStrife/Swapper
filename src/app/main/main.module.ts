import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { BodyMainComponent } from '../body-main/body-main.component';
import { CategoriasMainComponent } from '../categorias-main/categorias-main.component';
import { FontAwesomeModule } from '../../../node_modules/@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    BodyMainComponent,
    CategoriasMainComponent
  ],

  exports: [
    MainComponent,
    FontAwesomeModule
  ]

})
export class MainModule { 
}
