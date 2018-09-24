import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SignupModule } from './signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeModule,
    LoginModule,
    SharedModule,
    FormsModule,
    SignupModule
  ],
  declarations: []
})
export class HomeModule { }
