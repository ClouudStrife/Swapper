import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-user-main-products',
  templateUrl: './user-main-products.component.html',
  styleUrls: ['./user-main-products.component.css']
})
export class UserMainProductsComponent implements OnInit {

  URL = "http://localhost:3000"
  produtos:Produto[] = [];
  produto:Produto[] = [];

  usuarioLogado:User = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Produto[]>(this.URL+"/user/"+ this.usuarioLogado.id + "/produtos")
    .subscribe(dadosProdutos => {
      this.produtos = dadosProdutos
    });
  }

  getProductInfo(idProduto){
    console.log("ID:", idProduto);
    this.http.get<Produto[]>(this.URL+"/user/"+ this.usuarioLogado.id + "/produtos/" + idProduto)
    .subscribe(dadosProduto => {
      this.produto = dadosProduto
      console.log("Produto:", this.produto[0].nome);
    });
  }

  deleteProduct(idProduto){
    console.log("ID:", idProduto);
    this.http.delete<Produto[]>(this.URL+"/user/"+ this.usuarioLogado.id + "/produtos/" + idProduto + "/remove")
      .subscribe();
  }
}
