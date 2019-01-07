import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas/all';

  constructor(private http: AuthHttp) { }

  listarTodas(): Promise<any> {
    return this.http.get(this.pessoasUrl)
      .toPromise()
      .then(response => response.json());
  }
}
