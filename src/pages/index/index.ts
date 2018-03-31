import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { AlertController, NavController, NavParams } from "ionic-angular";
import { RegisterPage } from "../register/register";

import { AddPaper } from "../addpaper/addpaper";
import { PaperlistPage } from "../paperlist/paperlist";
import { BillingPage } from "../billing/billing";
import { DeliveryPage } from "../delivery/delivery";

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  constructor(
    public http: Http,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {

  }

  register() {
    this.navCtrl.setRoot(ContactPage);
  }

  paper() {
    this.navCtrl.setRoot(PaperlistPage)
  }

  billing() {
    this.navCtrl.setRoot(BillingPage)
  }

  delivery() {
    this.navCtrl.setRoot(DeliveryPage)
  }


}
