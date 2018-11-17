import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})




export class UserRegisterComponent{
  constructor(private http:HttpClient) { }

  cadastrarUsuario(form){

    this.http.post('http://localhost:3000/api/add', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
    
  }
}
