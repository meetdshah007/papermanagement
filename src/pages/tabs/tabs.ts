import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {AddPaper} from "../addpaper/addpaper";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddPaper;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
