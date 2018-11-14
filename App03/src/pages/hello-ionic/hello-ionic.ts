import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  total : number =0;
  n1 :any;
  n2 :any;

  constructor(public nacCtrl: NavController) {  }
  
  somar () {
    let n1 = this.n1 ? parseFloat(this.n1) : 0;
    let n2 = this.n2 ? parseFloat(this.n2) : 0;
    this.total = n1+n2;
    console.log("clicked");

  }

  }

