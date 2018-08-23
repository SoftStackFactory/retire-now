import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {UserProvider} from '../../providers/user/user';


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private appCtrl:App,
              public _user: UserProvider) {}

  @ViewChild(Slides) slides: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  slidePrev() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  skip(){
    this.appCtrl.getRootNav().push('TabsPage');
  }

  newUserSkip(){
    this.navCtrl.setRoot('TabsPage')
  }

  mySlides = [
    // {
    //   title: "Welcome to the Docs!",
    //   description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    //   image: "assets/imgs/coins.jpg",
    // },
    {
      title: "Dashboard",
      description: "Here you will be able to see all your created retirement profiles. You can pull up all profile information by tapping on the profile. Learn how to make a profile on the next slide!",
      image: "assets/imgs/coins.jpg",
    },
    {
      title: "Input",
      description: "Select a retirement date, enter your full retirment amount, and give a name to the retirement profile. When you submit, our calculation will show your retirement benefit at age 62, your full retirement age, 70, and your inputed retirement date age.",
      image: "assets/imgs/coins.jpg",
    }
  ];

}
