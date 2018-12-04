import { Component, OnInit } from '@angular/core';
import { Produto } from '../user-main-products/produto';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  URL = "http://localhost:3000"
  produtos:Produto[] = [];
  usuarioLogado:User = JSON.parse(localStorage.getItem('user'));
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Produto[]>(this.URL+"/user/"+ this.usuarioLogado.id +"/produtos")
    .subscribe(dadosProdutos => {
      this.produtos = dadosProdutos
    });
  }

  criarAnuncio(idProduto){
    this.http.post(this.URL + '/user/' + this.usuarioLogado.id + '/produto/' + idProduto + '/anuncio', 
      { anuncio: {
        id_produto: idProduto,
        id_anunciante: this.usuarioLogado.id,
        data: Date.now()
      }})
      .subscribe(res => res)
  }

}
