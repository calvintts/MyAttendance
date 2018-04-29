import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ClassesPage } from '../classes/classes';
import { RegisterServiceProvider } from '../../providers/register-service/register-service'
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
import { TeacherStudentSignUpPage } from '../teacher-student-sign-up/teacher-student-sign-up';
//import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  userRegisterInfo = {
    email: '',password:'',firstname:'',lastname:'',id_number:''
  };

  constructor(public navCtrl: NavController, public registerProvider: RegisterServiceProvider) {
  }

  userRegister(){
    let param = {
      "email":this.userRegisterInfo.email,
      "password":this.userRegisterInfo.password,
      "firstname":this.userRegisterInfo.firstname,
      "lastname":this.userRegisterInfo.lastname,
      "id_number":this.userRegisterInfo.id_number
    }
    this.registerProvider.userRegister(param).then((result) =>{
      console.log(result);
      if(result){
          this.navCtrl.push(LoginPage);
      }
    },(err)=>{
      console.log(err);
    });
  }


//   goToLogin(params){
//     if (!params) params = {};
//     this.navCtrl.push(LoginPage);
//   }goToClasses(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassesPage);
//   }goToCalander(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderPage);
//   }goToClassSix(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassSixPage);
//   }goToComplete(params){
//     if (!params) params = {};
//     this.navCtrl.push(CompletePage);
//   }goToCalanderClassSix(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassSixPage);
//   }goToClassFive(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassFivePage);
//   }goToCalanderClassFive(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassFivePage);
//   }goToClassFour(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassFourPage);
//   }goToCalanderClassFour(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassFourPage);
//   }goToClassThree(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassThreePage);
//   }goToCalanderClassThree(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassThreePage);
//   }goToClassTwo(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassTwoPage);
//   }goToCalanderClassTwo(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassTwoPage);
//   }goToClassOne(params){
//     if (!params) params = {};
//     this.navCtrl.push(ClassOnePage);
//   }goToCalanderClassOne(params){
//     if (!params) params = {};
//     this.navCtrl.push(CalanderClassOnePage);
//   }goToTeacherStudentSignUp(params){
//     if (!params) params = {};
//     this.navCtrl.push(TeacherStudentSignUpPage);
//   }goToSignup(params){
//     if (!params) params = {};
//     this.navCtrl.push(SignupPage);
//   }
// }
