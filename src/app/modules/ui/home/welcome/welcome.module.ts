import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SlideShowComponent } from './welcome/slide-show/slide-show.component';
import { ValidateCodeComponent } from './welcome/validate-code/validate-code.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    WelcomeComponent,
    SlideShowComponent,
    ValidateCodeComponent
  ]
})
export class WelcomeModule { }
