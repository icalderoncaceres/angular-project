import { NgModule } from '@angular/core';
import { LoggedComponent } from './header/logged/logged.component';
import { NoLoggedComponent } from './header/no-logged/no-logged.component';
import { FoPrincipalComponent } from './footer/fo-principal/fo-principal.component';
import { SharedModule } from '../../shared/shared.module';
import { FoCreditsComponent } from './footer/fo-credits/fo-credits.component';
import { FoLogoComponent } from './footer/fo-logo/fo-logo.component';
import { FoNavComponent } from './footer/fo-nav/fo-nav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoggedComponent,
    NoLoggedComponent,
    FoPrincipalComponent,
    FoCreditsComponent,
    FoLogoComponent,
    FoNavComponent
  ],
  exports: [
    LoggedComponent,
    NoLoggedComponent,
    FoPrincipalComponent
  ]
})
export class CommonsModule { }
