import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputMaskModule} from 'primeng/primeng';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { CampoColoridoDirective } from './diretivas/campo-colorido.directive';

import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { MessageComponent } from './message/message.component';
import { LacamentosModule } from './lacamentos/lacamentos.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    CampoColoridoDirective,
    PessoasCadastroComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule,

    LacamentosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
