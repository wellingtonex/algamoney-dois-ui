import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampoColoridoDirective } from './diretivas/campo-colorido.directive';

import { MessageComponent } from './message/message.component';
import { LacamentosModule } from './lacamentos/lacamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CampoColoridoDirective,    
    MessageComponent
  ],
  imports: [
    BrowserModule,
    LacamentosModule,
    PessoasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
