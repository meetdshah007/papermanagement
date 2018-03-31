import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {PaylistPage} from "../paylist/paylist";
import {PaidlistPage} from "../paidlist/paidlist";

/**
 * Generated class for the BillingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-billing',
  templateUrl: 'billing.html',
})
export class BillingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingPage');
  }
  dismiss(){

    this.navCtrl.setRoot(IndexPage)

  }

  pay(){

    this.navCtrl.setRoot(PaylistPage)

  }

  paid(){

    this.navCtrl.setRoot(PaidlistPage)

  }
}
