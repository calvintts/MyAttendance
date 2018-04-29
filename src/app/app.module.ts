import { FormsModule} from "@angular/forms";
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from "@angular/http";
import { HttpClientModule} from "@angular/common/http";
import { MyApp } from './app.component';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { LoginPage } from '../pages/login/login';
import { TeacherStudentSignUpPage } from "../pages/teacher-student-sign-up/teacher-student-sign-up";
import { TeacherSignupPage} from "../pages/teacher-signup/teacher-signup";
import { SignupPage} from "../pages/signup/signup";
import { ClassesPage } from '../pages/classes/classes';
import { ClassOnePage } from '../pages/class-one/class-one';
import { ClassTwoPage } from '../pages/class-two/class-two';
import { ClassThreePage } from '../pages/class-three/class-three';
import { ClassFourPage } from '../pages/class-four/class-four';
import { ClassFivePage } from '../pages/class-five/class-five';
import { ClassSixPage } from '../pages/class-six/class-six';
import { CompletePage } from '../pages/complete/complete';
import { CalanderPage } from '../pages/calander/calander';
import { CalanderClassOnePage } from '../pages/calander-class-one/calander-class-one';
import { CalanderClassTwoPage } from '../pages/calander-class-two/calander-class-two';
import { CalanderClassThreePage } from '../pages/calander-class-three/calander-class-three';
import { CalanderClassFourPage } from '../pages/calander-class-four/calander-class-four';
import { CalanderClassFivePage } from '../pages/calander-class-five/calander-class-five';
import { CalanderClassSixPage } from '../pages/calander-class-six/calander-class-six';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
      TeacherStudentSignUpPage,
      TeacherSignupPage,
      SignupPage,
    ClassesPage,
    ClassOnePage,
    ClassTwoPage,
    ClassThreePage,
    ClassFourPage,
    ClassFivePage,
    ClassSixPage,
    CompletePage,
    CalanderPage,
    CalanderClassOnePage,
    CalanderClassTwoPage,
    CalanderClassThreePage,
    CalanderClassFourPage,
    CalanderClassFivePage,
    CalanderClassSixPage
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      HttpModule,
      FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
      TeacherStudentSignUpPage,
      TeacherSignupPage,
      SignupPage,
    ClassesPage,
    ClassOnePage,
    ClassTwoPage,
    ClassThreePage,
    ClassFourPage,
    ClassFivePage,
    ClassSixPage,
    CompletePage,
    CalanderPage,
    CalanderClassOnePage,
    CalanderClassTwoPage,
    CalanderClassThreePage,
    CalanderClassFourPage,
    CalanderClassFivePage,
    CalanderClassSixPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}