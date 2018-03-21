import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { NgIf } from '@angular/common';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public busqueda: string;
  libros: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient,
    public loadingCtrl: LoadingController) {

    this.busqueda = "";
  }

  //Consulta a openlibrary.org (en formato json)
  buscarlibro() {
    this.presentarPagCarg();
    this.libros = this.httpClient.get('http://openlibrary.org/search.json?q=' + this.busqueda);
  }

  //'Empuja' la info a 'LibroDetallesPage' (cuando se muestran los detalles del lib)
  mostrarInfo(libro) {
    this.navCtrl.push('LibroDetallesPage', { libro: libro });
  }

  //Pantalla de cargando
  presentarPagCarg() {
    let loading = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}
