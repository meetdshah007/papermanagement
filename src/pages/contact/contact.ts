import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {RegisterPage} from "../register/register";
import { ServicesProvider } from '../../providers/services/services';

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
  userId: string;
  customerList: object[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public services: ServicesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ionViewWillEnter(){
    this.services.getUserData().then(data=>{
      this.userId = data.user_id;
      this.getCustomerList();
    });
    
  }

  getCustomerList(){
    this.services.get(`customers/getcustomerlist.php?user_id=${this.userId}`).subscribe((res:any)=>{
      console.log("=== res ===>", res);
      if(res.success){
        this.customerList = res.data.customer_list || [];
      }else{
        this.services.createWaring('Error',res.error);
      }
    }, (err) => {
      console.log("Error", err);
      const errMsg = err.message || 'Something is wrong with the network.';
      this.services.createWaring('Error', errMsg);
    });
  }

  dismiss(){
    this.navCtrl.setRoot(IndexPage);
  }

  onEdit(cust: any){
    console.log("== Selected customer =-===>", cust);
    this.navCtrl.push(RegisterPage, cust);
  }

  onDelete(cust: any){
    let data = {
      customer_id: cust.customer_id,
      user_id: this.userId
    };
    this.services.post(`customers/removecustomer.php`,data).subscribe((res:any)=>{
      console.log("=== delete res ===>", res);
    })
  }

  addcustomer(){
    this.navCtrl.push(RegisterPage)
  }

}
