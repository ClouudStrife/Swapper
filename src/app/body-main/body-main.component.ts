import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent implements OnInit {

  constructor() { }

  rota = "/userLogin"

  ngOnInit() {
    if(localStorage.getItem('userToken')){
      this.rota = "/userMain"
    }
    else{
      this.rota = "/userLogin"
    }
  }
}
