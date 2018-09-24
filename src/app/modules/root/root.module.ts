import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { SharedModule } from '../shared/shared.module';
import { CommonsModule } from '../ui/commons/commons.module';

@NgModule({
  imports: [
    SharedModule,
    CommonsModule
  ],
  declarations: [AppComponent]
})
export class RootModule { }
