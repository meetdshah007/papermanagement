import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IndexPage } from "../index/index";
import { RegisterPage } from "../register/register";
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
  searchTerm: string = '';
  userId: string;
  customerList: any[] = [];
  customerData: object[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public services: ServicesProvider
  ) {
  }

  ionViewWillEnter() {
    this.services.getUserData().then(data => {
      this.userId = data.user_id;
      this.getCustomerList();
    });

  }

  getCustomerList() {
    this.services.get(`customers/getcustomerlist.php?user_id=${this.userId}`).subscribe((res: any) => {
      if (res.success) {
        this.customerData = res.data.customer_list || [];
        this.customerList = res.data.customer_list || [];
      } else {
        this.services.createWaring('Error', res.error);
      }
    }, (err) => {
      console.log("Error", err);
      const errMsg = err.message || 'Something is wrong with the network.';
      this.services.createWaring('Error', errMsg);
    });
  }

  setFilteredItems() {
    let filterList = [];
    if (this.searchTerm && this.searchTerm.length) {
      this.customerData.map((data: any) => {
        if (data.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
          filterList.push(data);
        }
        return data;
      });
    } else {
      filterList = this.customerData || [];
    }
    this.customerList = filterList;
  }

  dismiss() {
    this.navCtrl.setRoot(IndexPage);
  }

  onEdit(cust: any) {
    this.navCtrl.push(RegisterPage, cust);
  }

  onDelete(cust: any) {
    let data = {
      customer_id: cust.customer_id,
      user_id: this.userId
    };

    this.services.alertWithInput('Are you Sure?', null, 'Agree', (retData, scope) => {
      scope.services.post(`customers/removecustomer.php`, data).subscribe((res: any) => {
        scope.services.presentToast(`Customer account is deleted successfully.`);
        scope.getCustomerList();
      });
    }, this);
  }

  addcustomer() {
    this.navCtrl.push(RegisterPage)
  }

}
