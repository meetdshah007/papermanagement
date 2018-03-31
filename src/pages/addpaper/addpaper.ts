import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {PaperlistPage} from "../paperlist/paperlist";

@Component({
  selector: 'page-addpaper',
  templateUrl: 'addpaper.html'
})
export class AddPaper {

  constructor(public navCtrl: NavController) {

  }
  dismiss(){
    this.navCtrl.setRoot(PaperlistPage);

  }

  submit(){

    this.navCtrl.setRoot(AddPaper)

  }


}
