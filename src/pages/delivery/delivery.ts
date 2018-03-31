import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";

/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
  }

  dismiss(){

    this.navCtrl.setRoot(IndexPage)

  }

}
