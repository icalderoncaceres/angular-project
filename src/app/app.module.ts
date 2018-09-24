
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared/shared.module';
import { RootModule } from './modules/root/root.module';
import { AppComponent } from './modules/root/app/app.component';
import { CommonsModule } from './modules/ui/commons/commons.module';
import { HomeModule } from './modules/ui/home/home.module';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptor } from './util/interceptors/authorization/jwt-http-interceptor';
import { ApplicationModule } from './modules/ui/application/application.module';

// ======= To get access token
export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    RootModule,
    CommonsModule,
    HomeModule,
    ApplicationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
