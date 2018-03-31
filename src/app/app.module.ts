import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';


//Plugins
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from "@angular/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';


//Services
import { ServicesProvider } from '../providers/services/services';


// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { IndexPage } from "../pages/index/index";
import { RegisterPage } from "../pages/register/register";
import { AddPaper } from "../pages/addpaper/addpaper";
import { PaperlistPage } from "../pages/paperlist/paperlist";
import { BillingPage } from "../pages/billing/billing";
import { DeliveryPage } from "../pages/delivery/delivery";
import { BilllistPage } from "../pages/billlist/billlist";
import { PaylistPage } from "../pages/paylist/paylist";
import { PaidlistPage } from "../pages/paidlist/paidlist";
import { InsertpaperPage } from "../pages/insertpaper/insertpaper";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    IndexPage,
    PaperlistPage,
    BillingPage,
    DeliveryPage,
    BilllistPage,
    PaylistPage,
    PaidlistPage,
    InsertpaperPage,
    AboutPage,
    ContactPage,
    AddPaper,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    IndexPage,
    PaperlistPage,
    BillingPage,
    DeliveryPage,
    BilllistPage,
    PaylistPage,
    PaidlistPage,
    InsertpaperPage,
    AboutPage,
    ContactPage,
    AddPaper,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServicesProvider
  ]
})
export class AppModule { }
