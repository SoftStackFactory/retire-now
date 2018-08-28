import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { UserProvider } from '../providers/user/user';
import { ResultsPageModule } from "../pages/results/results.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPage } from "../pages/landing/landing";
import { InputEditPageModule } from '../pages/input-edit/input-edit.module';
import { TabsPageModule} from "../pages/tabs/tabs.module"; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpClientModule,
    ResultsPageModule,
    InputEditPageModule,
    BrowserAnimationsModule,
    TabsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
