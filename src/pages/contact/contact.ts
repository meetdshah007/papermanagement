import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {RegisterPage} from "../register/register";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  dismiss(){
    this.navCtrl.setRoot(IndexPage);

  }

  addcustomer(){

    this.navCtrl.setRoot(RegisterPage)

  }

}
