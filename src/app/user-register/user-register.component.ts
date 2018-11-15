import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})




export class UserRegisterComponent{

  constructor(private http:HttpClient) { }

  email: string;
  senha: string;

  cadastrarUsuario(form){
    this.email = form.value.Email;
    this.senha = form.value.Senha;

    this.http.post('http://localhost:3000/api/add', { "email": this.email, "senha": this.senha})
      .subscribe(dados => console.log(dados));
    
    //form.reset();
    console.log(form);
  }
  

}
