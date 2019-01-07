import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(nome: string, senha: string) {
    this.authService.login(nome, senha)
    .then(() => this.router.navigate(['/lancamentos']))
    .catch(erro => {
      this.errorHandler.handle(erro);
    })
    //console.log(btoa(`${nome}:${senha}`));
  }
}
