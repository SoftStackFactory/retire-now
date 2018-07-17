import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage} from '../pages/login/login';
import { InputPage } from '../pages/input/input';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandingPage } from '../pages/landing/landing';
import { ChartsModule } from 'ng2-charts';
import { ResultsPage } from '../pages/results/results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    DashboardPage,
    LandingPage,
    ResultsPage,
    LoginPage,
    InputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    DashboardPage,
    LandingPage,
    ResultsPage,
    LoginPage,
    InputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
