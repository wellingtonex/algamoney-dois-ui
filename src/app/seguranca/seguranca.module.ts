import { NgModule } from '@angular/core';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './seguranca-router.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    AppRoutingModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
