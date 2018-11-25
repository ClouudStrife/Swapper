import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})


export class UserRegisterComponent{
  response:any;
  error:boolean;

  constructor(private http:HttpClient) { }

  cadastrarUsuario(form){

    this.http.post('http://localhost:3000/user/cadastro', { usuario : form.value }, { observe: 'response' })
      .subscribe((dados:any) => {
        if (dados.status == 201){
          this.error = false;
          this.response = "Cadastro do usuário " + dados.body.nome + " realizado com sucesso !";
          form.reset();
        }
        else{
          this.error = true;
          this.response = dados.body.sqlMessage;
        }
      });
  }
}
