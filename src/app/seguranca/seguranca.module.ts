import { NgModule } from '@angular/core';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './seguranca-router.module';

export function authHttpServiceFacotry(http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });
  return new AuthHttp(config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    AppRoutingModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFacotry,
      deps: [Http, RequestOptions]
    }
  ]
})
export class SegurancaModule { }
