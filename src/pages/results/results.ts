import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  isModal = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _user: UserProvider, public viewCtrl: ViewController) {
    console.log("Modal", this.isModal)
    console.log(navParams.get('isModal'))
    this.isModal = navParams.get('isModal');
  }

  dismiss() { 
    this.viewCtrl.dismiss();
   }


  barChart: any;
 
    toggleChart: boolean = false;
    profile: any;

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      {data: [], label: ''}
    ];
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
   
    public randomize():void {
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }
    ionViewDidLoad() {
      this.toggleChart = false;
      console.log('ionViewDidLoad DashboardPage');
      this._user.getProfileResults()
        .subscribe( (res: any) => {
            console.log("result for profile ID", res)
            this.barChartLabels = res.barChartLabels;
            this.barChartData = res.chart;
            console.log("chart name",res.name);
            this.barChartData[0].label = res.name;
            console.log(this.barChartData, "this is the chart");
            this.profile = res;
            console.log(this.profile, "this is the profile data");
            this.toggleChart = true;
        }) 
      
    }

  }



