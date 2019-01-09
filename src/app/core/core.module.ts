import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';

import { CategoriaService } from './../categorias/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentoService } from 'app/lancamentos/lancamento.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthService } from 'app/seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    Title,
    AuthService,
    ConfirmationService,
    JwtHelper,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
