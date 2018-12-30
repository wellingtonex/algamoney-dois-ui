import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { CampoColoridoDirective } from './diretivas/campo-colorido.directive';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    CampoColoridoDirective,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
