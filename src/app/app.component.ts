import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LandingPage} from "../pages/landing/landing";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {TutorialPage} from "../pages/tutorial/tutorial";
import {InputPage} from "../pages/input/input";
import {ResultsPage} from "../pages/results/results";
import {DashboardPage} from "../pages/dashboard/dashboard";
import {AccountPage} from "../pages/account/account";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pages List', component: ListPage },
      { title: 'Landing', component: LandingPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Tutorial', component: TutorialPage },
      { title: 'Input', component: InputPage },
      { title: 'Results', component: ResultsPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Account', component: AccountPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
