import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent{

  constructor() { }

  cadastrarUsuario(form){
    console.log(form);
  }
  

}
