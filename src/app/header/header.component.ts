import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userToken'){
      this.conta = "Minha conta";
      this.rota = "userMain"
    }
    else{
      this.conta = "Entrar"
      this.rota = "userLogin"
    }
  }

}
