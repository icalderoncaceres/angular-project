import { NgModule } from '@angular/core';
import { TokenizationComponent } from './tokenization/tokenization.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TokenizationComponent],
  exports: [TokenizationComponent]
})
export class TokenizationModule { }
