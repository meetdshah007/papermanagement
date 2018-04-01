import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { IndexPage } from '../pages/index';
import { ServicesProvider } from '../providers/services/services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public services: ServicesProvider
  ) {
    this.init()

  }
  init() {
    this.platform.ready().then(() => {
      this.services.getLogged().then((res) => {
        if (res) this.nav.setRoot(IndexPage);
        else this.nav.setRoot(LoginPage)
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
