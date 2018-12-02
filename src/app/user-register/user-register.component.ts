import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})


export class UserRegisterComponent{
  response:any;
  error:boolean;

  constructor(private http:HttpClient, private router: Router){}

  cadastrarUsuario(form){
    this.http.post('http://localhost:3000/user/cadastro', { usuario : form.value }, { observe: 'response' })
      .subscribe((dados:any) => {
        if (dados.status == 201){
          this.error = false;
          this.response = "Seja bem vindo " + dados.body.nome + "!";
          form.reset();
        }
        else{
          this.error = true;
          this.response = dados.body.sqlMessage;
        }
      });
  }

  goToUser(){
    this.router.navigate (['/userLogin']);
  }
}
