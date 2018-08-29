import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';

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
  isBtn = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _user: UserProvider, public viewCtrl: ViewController) {
    console.log("Modal", this.isModal)
    console.log("Button", this.isBtn)
    console.log('Modal Param', navParams.get('isModal'))
    console.log('Button Param', navParams.get('isBtn'))
    this.isModal = navParams.get('isModal');
    this.isBtn = navParams.get('isBtn');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  barChart: any;

  toggleChart: boolean = false; //used to load chart with data after page load
  profile: any; //used for populating card

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = []; //Labels for ages
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [ //Bar char amounts here
    {data: [], label: ''}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  //On loading of the chart, data from the backend server will populate 
  //barChartLabels, and barChartData, see docs for more information
  ionViewDidLoad() {
    this.toggleChart = false;
    console.log('ionViewDidLoad DashboardPage');
    this._user.getProfileResults()
      .subscribe((res: any) => {
        this.barChartLabels = res.barChartLabels;
        this.barChartData = res.chart;
        this.barChartData[0].label = res.name;
        this.profile = res;
        this.toggleChart = true;
      })
  }

}



