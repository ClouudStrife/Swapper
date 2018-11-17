import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-main-products',
  templateUrl: './user-main-products.component.html',
  styleUrls: ['./user-main-products.component.css']
})
export class UserMainProductsComponent implements OnInit {

  constructor() { }

  produtos = [
    {
      nome: 'produto1',
      descricao: 'seila'
    },

    {
      nome: 'produto2',
      descricao: 'seila'
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

  ngOnInit() {
  }

}
