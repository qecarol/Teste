import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExcluirPage } from '../excluir/excluir';


@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  irpaginaExcluir(){

    this.navCtrl.push(ExcluirPage);
  }

}
