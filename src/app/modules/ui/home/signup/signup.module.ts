import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { ImgReferenceComponent } from './signup/img-reference/img-reference.component';
import { RegisterComponent } from './signup/register/register.component';
import { TopContentComponent } from './signup/top-content/top-content.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SignupComponent,
    ImgReferenceComponent,
    RegisterComponent,
    TopContentComponent
  ]
})
export class SignupModule { }
