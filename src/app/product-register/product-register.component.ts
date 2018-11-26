import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent {

  URL="http://localhost:3000"

  constructor(private http:HttpClient, private router: Router) { }

  usuarioLogado:User = JSON.parse(localStorage.getItem('user'));

  cadastrarProduto(form){
    this.http.post(this.URL+"/user/"+ this.usuarioLogado.id +"/produtos/cadastra", { produto : form.value })
    .subscribe(resposta => {
        form.reset();
        this.router.navigate (['/userMain']);
    },
    (err:HttpErrorResponse) => { //VERIFICA SE RESPOSTA DO SERVIDOR RETORNOU ALGUM ERRO, STATUS(500), 400 ETC..
      window.alert(err.error);
      form.reset();
    });
  }
}
