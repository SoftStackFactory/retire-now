import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

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
    this.navCtrl.push('DashboardPage')
  }

  newUserSkip(){
    this.navCtrl.push('InputPage')
  }

  mySlides = [
    // {
    //   title: "Welcome to the Docs!",
    //   description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    //   image: "assets/imgs/coins.jpg",
    // },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/coins.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/coins.jpg",
    }
  ];

}
