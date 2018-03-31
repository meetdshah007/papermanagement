import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {BillingPage} from "../billing/billing";

/**
 * Generated class for the PaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paylist',
  templateUrl: 'paylist.html',
})
export class PaylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaylistPage');
  }
  dismiss(){

    this.navCtrl.setRoot(BillingPage)

  }

}
