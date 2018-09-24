import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TokenizationModule } from './tokenization/tokenization.module';

@NgModule({
  imports: [
    SharedModule,
    TokenizationModule
  ],
  declarations: []
})
export class ApplicationModule { }
