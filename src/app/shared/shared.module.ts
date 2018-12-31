import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { CampoColoridoDirective } from './diretivas/campo-colorido.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    CampoColoridoDirective
  ],
  exports: [
    MessageComponent,
    CampoColoridoDirective
  ]
})
export class SharedModule { }
