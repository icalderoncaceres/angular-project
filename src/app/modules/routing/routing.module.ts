import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoLoggedComponent } from '../ui/commons/header/no-logged/no-logged.component';
import { WelcomeComponent } from '../ui/home/welcome/welcome/welcome.component';
import { SignupComponent } from '../ui/home/signup/signup/signup.component';
import { LoginComponent } from '../ui/home/login/login/login.component';
import { TokenizationComponent } from '../ui/application/tokenization/tokenization/tokenization.component';

const routes: Routes = [
  // { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // {
  //   outlet: 'primary', path: '',
  //   children: [
  //     {
  //       path: 'welcome',
  //       children: [
  //         {
  //           path: '',
  //           outlet: 'main',
  //           component: WelcomeComponent
  //         },
  //         {
  //           path: '',
  //           outlet: 'header',
  //           component: NoLoggedComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: 'signup',
  //       children: [
  //         {
  //           path: '',
  //           outlet: 'main',
  //           component: SignupComponent
  //         },
  //         {
  //           path: '',
  //           outlet: 'header',
  //           component: NoLoggedComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: 'login',
  //       children: [
  //         {
  //           path: '',
  //           outlet: 'main',
  //           component: LoginComponent
  //         },
  //         {
  //           path: '',
  //           outlet: 'header',
  //           component: NoLoggedComponent
  //         }
  //       ]
  //     }
  //   ]
  // },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app/tokenization', component: TokenizationComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
