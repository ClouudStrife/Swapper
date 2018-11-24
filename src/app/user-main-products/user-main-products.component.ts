import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-main-products',
  templateUrl: './user-main-products.component.html',
  styleUrls: ['./user-main-products.component.css']
})
export class UserMainProductsComponent implements OnInit {

  nomeProduto = '';
  descricao = '';

  constructor() { }

  produtos = [
    {
      nome: 'produto1',
      descricao: 'seila'
    },

    {
      nome: 'produto2',
      descricao: 'Coala GOD'
    },

    {
      nome: 'produto3',
      descricao: 'GUGA'
    },

    {
      nome: 'produto4',
      descricao: 'seila'
    }
  ]

  setNome(nome:string, desc:string){
    this.nomeProduto = nome;
    this.descricao = desc;
  }

  ngOnInit() {
  }

}
