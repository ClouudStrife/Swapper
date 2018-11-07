import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface User{
  email: string;
  senha: string;
}


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})



export class UserLoginComponent{
  
  user: User[];

  constructor(private http: HttpClient){
    http.get<User[]>('http://localhost:3000/api').subscribe(dadosApi => {
      this.user = dadosApi;
      console.log(this.user);
    });
  }

  sendPost(email: string, senha: string){
    this.http.post('http://localhost:3000/api/add', {email, senha})
      .subscribe(dados => console.log(dados));
  }
}
