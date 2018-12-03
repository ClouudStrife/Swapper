import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  conta = "Entrar"
  rota = "userLogin"
  usuario = "";
  usuarioJSON = "";
  show = false;

  ngOnInit() {
    if(localStorage.getItem('userToken')){
      this.conta = "Minha conta";
      this.rota = "userMain"
      this.usuarioJSON = localStorage.getItem("user");
      this.usuario = JSON.parse(this.usuarioJSON)
      this.show = true;
    }
    else{
      this.conta = "Entrar"
      this.rota = "userLogin"
    }
  }

}
