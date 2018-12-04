import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncios } from '../anuncios';
import { Ofertas } from '../ofertas';


@Component({
  selector: 'app-user-main-anuncios',
  templateUrl: './user-main-anuncios.component.html',
  styleUrls: ['./user-main-anuncios.component.css']
})
export class UserMainAnunciosComponent implements OnInit {
 
  anuncios:Anuncios[] = [];
  ofertas:Ofertas[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Anuncios[]>("http://localhost:3000/user/131/anuncios")
      .subscribe( res => {
        this.anuncios = res;
      })
  }

  getOfertas(id){
    this.http.get<Ofertas[]>("http://localhost:3000/anuncio/"+ id +"/propostas/recebidas")
    .subscribe( ofertasApi => {
      this.ofertas = ofertasApi;
      console.log(ofertasApi);
    })
  }
}