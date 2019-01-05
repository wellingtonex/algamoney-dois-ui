import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { LacamentosModule } from './lacamentos/lacamentos.module';
import { LancamentoService } from './lacamentos/lancamento.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { ConfirmationService } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpModule,

    ConfirmDialogModule,
    ToastyModule.forRoot(),

    LacamentosModule,
    PessoasModule
  ],
  providers: [
    LancamentoService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
