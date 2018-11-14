import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPage } from '../editar/editar';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AcessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acesso',
  templateUrl: 'acesso.html',
})
export class AcessoPage {


post : any;
users : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider :RestProvider ) {
    this.ListPost();
  }

  ListPost(){
    this.restProvider.getPostagem() //método que esta no provider rest
    .then(data=>{
      this.post = data;
      console.log(this.post);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoPage');
  }

  irpaginaAcessoPage(){

    this.navCtrl.push(AcessoPage);
  }
}
