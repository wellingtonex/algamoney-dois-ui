import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers,  withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
      }).catch(error => {
        if(error.status === 400) {
          const responseJson = error.json();
          if(responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválido.')
          }
        }
        return Promise.reject(error);
      })
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    console.log(this.jwtPayload);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `grant_type=refresh_token`;
    return this.http.post(this.oauthTokenUrl, body, { headers,  withCredentials: true })
      .toPromise()
      .then(response => {
        console.log('Novo access token criado');
        this.armazenarToken(response.json().access_token);
        Promise.resolve(null);
      }).catch(error => {
        console.log('Erro ao renovar token.', error);
        Promise.resolve(null);
      })
  }

  temPermissao(permissao: String) : boolean{
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temPermissaoDePesquisarPessoa() : boolean{
    return this.temPermissao('ROLE_PESQUISAR_PESSOA');
  }

  temPermissaoDeRemoverPessoa() : boolean{
    return this.temPermissao('ROLE_REMOVER_PESSOA');
  }

  temPermissaoDeCadastrarPessoa() : boolean{
    return this.temPermissao('ROLE_CADASTRAR_PESSOA');
  }

  temPermissaoDePesquisarLancamento() : boolean{
    return this.temPermissao('ROLE_PESQUISAR_LANCAMENTO');
  }

  temPermissaoDeRemoverLancamento() : boolean{
    return this.temPermissao('ROLE_REMOVER_LANCAMENTO');
  }

  temPermissaoDeCadastrarLancamento() : boolean{
    return this.temPermissao('ROLE_CADASTRAR_LANCAMENTO');
  }

}
