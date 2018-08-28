import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  num: number;

  dashboardRoot = 'DashboardPage';
  inputRoot = 'InputPage';
  accountRoot = 'AccountPage';

  constructor(public navCtrl: NavController,
              public _navParams: NavParams) {
    let tabIndex = _navParams.get('tabIndex')
    this.num = tabIndex ? tabIndex : 0;
    console.log("tabIndex", tabIndex);
  }

}
