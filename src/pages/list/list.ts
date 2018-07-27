import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

const items = [
  {
    name: 'Landing Page',
    component: 'LandingPage',
    note: 'This is the landing page',
    icon: 'analytics'
  },
  {
    name: 'Login Page',
    component: 'LoginPage',
    note: 'This is the login page',
    icon: 'add'
  },
  {
    name: 'Register Page',
    component: 'RegisterPage',
    note: 'This is the register page',
    icon: 'barcode'
  },
  {
    name: 'Tutorial Page',
    component: 'TutorialPage',
    note: 'This is the tutorial page',
    icon: 'bowtie'
  },
  {
    name: 'Input Page',
    component: 'InputPage',
    note: 'This is the input page',
    icon: 'bulb'
  },
  {
    name: 'Results Page',
    component: 'ResultsPage',
    note: 'This is the results page',
    icon: 'cafe'
  },
  {
    name: 'DashboardPage',
    component: 'DashboardPage',
    note: 'This is the dashboard page',
    icon: 'chatbubbles'
  },
  {
    name: 'Account Page',
    component: 'AccountPage',
    note: 'This is the account page',
    icon: 'cloudy'
  },
  {
    name: 'Tabs Page',
    component: 'TabsPage',
    note: 'This is the tabs page',
    icon: 'disc'
  },
]

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  pages: Array<{name: string, component: string, note: string, icon: string}> = items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event, page) {
    this.navCtrl.push(page);
  }
}
