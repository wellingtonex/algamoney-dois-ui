import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

export interface LacamentoFiltro {
  descricao: string;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) { }

  pesquisar(filtro: LacamentoFiltro) : Promise<any> {

    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    const params = new URLSearchParams();

    if(filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers, params})
     .toPromise()
     .then(response => response.json().content);            
  }
}
