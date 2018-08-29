import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ResultsPage} from '../../pages/results/results';
import {ModalController} from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
import {InputEditPage} from '../input-edit/input-edit';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public _user: UserProvider) {
  }

  profileInformation: any;
  savedProfiles: any = [];
  userInfo: any;
  toggleLoad: boolean = false;

  ionViewDidLoad() {
  }
// when edit info is pressed on the saved user card
  editInfo() {
    this.navCtrl.push('InputPage');
  }
// user saved cards will be displayed
  loadUserData() {
    let user = sessionStorage.getItem('userInfo');
    this.userInfo = JSON.parse(user);
    this.toggleLoad = true;
    this._user.getUserProfiles()
      .subscribe((res: any) => {
        console.log("profiles for user ID", res)
        this.savedProfiles = res;
      })
  }
// deleted a user saved profile
  onDelete(profileId) {
    this._user.deleteUserProfile(profileId)
      .subscribe((res: any) => {
        this.savedProfiles = this.savedProfiles.filter(arr => arr.id !== profileId);
      })
  }
// shows result page as a modal when a profile is clicked 
  presentModal(id) {
    let modal = this.modalCtrl.create(ResultsPage, {isModal: true});
    sessionStorage.setItem("profileId", id)
    modal.present();
  }
// takes the user to the input-edit page when edit is clicked on the profile card
  inputModal(profile) {
    const modal = this.modalCtrl.create(InputEditPage);
    this._user.profileDataDB = profile;
    modal.present();
  }
// allows the dashboard to update when a user saves a new profile
  ionViewWillEnter() {
    this.loadUserData();
  }

}
