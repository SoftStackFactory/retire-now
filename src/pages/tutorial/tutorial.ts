import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, App, Tabs} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {UserProvider} from '../../providers/user/user';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appCtrl: App,
              public _user: UserProvider,
              public _navParams: NavParams) {
  }

  @ViewChild(Slides) slides: Slides;

  ionViewDidLoad() {}

  slidePrev() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  //skip function called for a returning user, routes to dashboard
  skip() {
    this.appCtrl.getRootNav().push('TabsPage');
  }

  //skip function called for a newly registered user, routes to input page
  newUserSkip() {
    this.navCtrl.setRoot(TabsPage, {tabIndex: 1});
  }

  mySlides = [
    {
      title: "Dashboard",
      description: "Here you will be able to see all your created retirement profiles. You can pull up all profile information by tapping on the profile. Learn how to make a profile on the next slide!",
      image: "assets/imgs/IMG_2977.PNG",
    },
    {
      title: "Input",
      description: "Select a retirement date, enter your full retirment amount, and give a name to the retirement profile. Click submit to see your calculated payout.",
      image: "assets/imgs/IMG_2974.PNG",
    },
    {
      title: "Results",
      description: "The graph will always showcase your monthly payouts at 62, your full retirement age, and 70. Your age at your entered retirement date will be the fourth bar.",
      image: "assets/imgs/IMG_2976.PNG",
    }
  ];

}
