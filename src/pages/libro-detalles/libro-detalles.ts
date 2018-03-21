import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-libro-detalles',
  templateUrl: 'libro-detalles.html',
})
export class LibroDetallesPage {
  libro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.libro = this.navParams.get('libro');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibroDetallesPage');
  }

}
