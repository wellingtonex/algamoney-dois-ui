import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';

import { NotAuthenticatedError } from 'app/seguranca/money-http';


@Injectable()
export class ErrorHandlerService {

  constructor(
    private toastyService: ToastyService,
    private router: Router
    ) { }

  handle(errorResponse: any) {
    let msg: string;
    if(typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if( errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou.'
      this.router.navigate(['/login']);
    } else {

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      } else {
        msg = 'Erro ao processar serviço remoto. Tente novamente.'
        console.log('Ocorreu um erro', errorResponse);
      }
    }
    this.toastyService.error(msg);
  }
}
