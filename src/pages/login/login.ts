import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassesPage } from '../classes/classes';
import { LoginServiceProvider} from '../../providers/login-service/login-service';
// import { LoginPage } from '../login/login';
import { CalanderPage } from '../calander/calander';
import { ClassSixPage } from '../class-six/class-six';
import { CompletePage } from '../complete/complete';
import { CalanderClassSixPage } from '../calander-class-six/calander-class-six';
import { ClassFivePage } from '../class-five/class-five';
import { CalanderClassFivePage } from '../calander-class-five/calander-class-five';
import { ClassFourPage } from '../class-four/class-four';
import { CalanderClassFourPage } from '../calander-class-four/calander-class-four';
import { ClassThreePage } from '../class-three/class-three';
import { CalanderClassThreePage } from '../calander-class-three/calander-class-three';
import { ClassTwoPage } from '../class-two/class-two';
import { CalanderClassTwoPage } from '../calander-class-two/calander-class-two';
import { ClassOnePage } from '../class-one/class-one';
import { CalanderClassOnePage } from '../calander-class-one/calander-class-one';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  userLoginInfo = {email: '', password: ''};

  constructor(public navCtrl: NavController, public loginProvider: LoginServiceProvider) {

  }

  userLogin() {
    let param = { "email": this.userLoginInfo.email, "password": this.userLoginInfo.password} ;
        this.loginProvider.userLogin(param).then((result) => {
            console.log(result);
            if(result){
              this.navCtrl.push(ClassesPage);
            }
        }, (err) => {
            console.log(err);
        });
  }

  instructorLogin() {
    let param = { "email": this.userLoginInfo.email, "password": this.userLoginInfo.password} ;
        this.loginProvider.instructorLogin(param).then((result) => {
            console.log(result);
            if(result){
              this.navCtrl.push(ClassesPage);
            }
        }, (err) => {
            console.log(err);
        });
  }

  goToClasses(params){
    if (!params) params = {};
    this.navCtrl.push(ClassesPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCalander(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderPage);
  }goToClassSix(params){
    if (!params) params = {};
    this.navCtrl.push(ClassSixPage);
  }goToComplete(params){
    if (!params) params = {};
    this.navCtrl.push(CompletePage);
  }goToCalanderClassSix(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassSixPage);
  }goToClassFive(params){
    if (!params) params = {};
    this.navCtrl.push(ClassFivePage);
  }goToCalanderClassFive(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassFivePage);
  }goToClassFour(params){
    if (!params) params = {};
    this.navCtrl.push(ClassFourPage);
  }goToCalanderClassFour(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassFourPage);
  }goToClassThree(params){
    if (!params) params = {};
    this.navCtrl.push(ClassThreePage);
  }goToCalanderClassThree(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassThreePage);
  }goToClassTwo(params){
    if (!params) params = {};
    this.navCtrl.push(ClassTwoPage);
  }goToCalanderClassTwo(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassTwoPage);
  }goToClassOne(params){
    if (!params) params = {};
    this.navCtrl.push(ClassOnePage);
  }goToCalanderClassOne(params){
    if (!params) params = {};
    this.navCtrl.push(CalanderClassOnePage);
  }
}
