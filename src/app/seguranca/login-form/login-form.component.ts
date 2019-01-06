import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(nome: string, senha: string) {
    this.authService.login(nome, senha);
    console.log(btoa(`${nome}:${senha}`));
  }
}
