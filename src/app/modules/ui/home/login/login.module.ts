import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { LoTopContentComponent } from './login/lo-top-content/lo-top-content.component';
import { LoImgReferenceComponent } from './login/lo-img-reference/lo-img-reference.component';
import { SigninComponent } from './login/signin/signin.component';
import { OptionsComponent } from './login/signin/options/options.component';
import { EmailComponent } from './login/signin/email/email.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LoTopContentComponent,
    LoImgReferenceComponent,
    SigninComponent,
    OptionsComponent,
    EmailComponent
  ]
})
export class LoginModule { }
