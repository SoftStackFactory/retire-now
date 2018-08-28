import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../../pages/results/results';
import { ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { InputEditPage } from '../input-edit/input-edit';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public _user: UserProvider) {
  }

  

  profileInformation:any;

  savedProfiles: any = [];
  userInfo: any;
  toggleLoad: boolean = false;
  ionViewDidLoad() {
 
  }

  editInfo(){
    this.navCtrl.push('InputPage');
  }

  loadUserData(){
    let user = sessionStorage.getItem('userInfo');
    this.userInfo = JSON.parse(user);
    this.toggleLoad = true;
    this._user.getUserProfiles()
      .subscribe( (res: any) => {
          console.log("profiles for user ID", res)
          this.savedProfiles = res;
      }) 
  }
  
  onDelete(profileId){
   
    this._user.deleteUserProfile(profileId)
      .subscribe( ( res: any ) => { 
        this.savedProfiles = this.savedProfiles.filter(arr => arr.id !== profileId);
      })
  }

  presentModal(id) {
    let modal = this.modalCtrl.create(ResultsPage, {isModal: true});
    sessionStorage.setItem("profileId", id)
    modal.present();
  }

  inputModal(profile){
    const modal = this.modalCtrl.create(InputEditPage);
    this._user.profileDataDB = profile;
    modal.present();
  }

  
  ionViewWillEnter(){
    this.loadUserData();
  }

}
