import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../user-main-products/produto';
import { HttpClient } from '@angular/common/http';
import { Anuncios } from '../anuncios';
import { User } from '../user';


@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {
  categoria:string; 
  produtos:Produto[] = [];
  anuncios:Anuncios[] = [];
  rota:string = '/lista/oferta/';
  URL = "http://localhost:3000";

  constructor(private route: ActivatedRoute, private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
       (parametro:any) => { 
         this.categoria = parametro['categoria'];
       });

    this.http.get<Anuncios[]>("http://localhost:3000/anuncios/" + this.categoria)
    .subscribe( res => {
      this.anuncios = res;
    })
  }

  setRota(anuncioID){
    console.log(anuncioID);
    this.rota += anuncioID;
    this.router.navigate ([this.rota]);
  }
}
