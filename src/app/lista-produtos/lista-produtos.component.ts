import { Component, OnInit } from '@angular/core';
import { Produto } from '../user-main-products/produto';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  URL = "http://localhost:3000"
  produtos:Produto[] = [];
  usuarioLogado:User = JSON.parse(localStorage.getItem('user'));
  anuncioID:any;
  var:string;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(
      (parametro:any) => { 
        this.anuncioID = parametro['idOptional'];
        this.var = parametro['var'];
        console.log(this.var);
      });

    this.http.get<Produto[]>(this.URL+"/user/"+ this.usuarioLogado.id +"/produtos")
    .subscribe(dadosProdutos => {
      this.produtos = dadosProdutos
    });

   
  }

  action(idProduto){

    if(this.var == 'anuncio'){
      this.http.post(this.URL + '/user/' + this.usuarioLogado.id + '/produto/' + idProduto + '/anuncio', 
      { anuncio: {
        id_produto: idProduto,
        id_anunciante: this.usuarioLogado.id,
        data: Date.now()
      }})
      .subscribe(res => window.alert("Anúncio realizado com sucesso"))
    }
    else if (this.var == 'oferta'){
      this.http.post(this.URL + '/user/' + this.usuarioLogado.id + '/produto/' + idProduto + '/proposta/' + this.anuncioID,
       { proposta:  {
         data_criacao: '10/10/1000',
         mensagem: 'oi'
       }})
      .subscribe( res => window.alert("Oferta realizada com sucesso"))
    }
  }

}
