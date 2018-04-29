import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterServiceProvider } from '../../providers/register-service/register-service'

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
