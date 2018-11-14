import { Component } from '@angular/core';
import { PrincipalPage } from '../principal/principal';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AcessoPage } from '../acesso/acesso';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  
  constructor(public navCtrl: NavController) {
  
  }


  irpaginaAcessoPage(){

    this.navCtrl.push(AcessoPage);
  }
}

