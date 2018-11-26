import { Component} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})



export class UserLoginComponent{

  constructor(private http:HttpClient, private router: Router){}

  usuario: User;
  URL = "http://localhost:3000"

  loginVerify(form){
    this.http.post(this.URL+"/user/login", { login: form.value }, { observe: 'response' })
      .subscribe( (resposta:any) => {
        if(resposta.status == 200){
          this.usuario = resposta.body.usuario_logado;
          localStorage.setItem('userToken', resposta.body.token);
          localStorage.setItem('user', JSON.stringify(this.usuario));
          this.router.navigate (['/userMain']);
        }
      },
      (err:HttpErrorResponse) => { //VERIFICA SE RESPOSTA DO SERVIDOR RETORNOU ALGUM ERRO, STATUS(500), 400 ETC..
          window.alert(err.error);
          form.reset();
      });
  }
}
