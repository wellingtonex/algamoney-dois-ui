import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Response } from '@angular/http';

@Injectable()
export class ErrorHandlerService {

  constructor(private toastyService: ToastyService) { }

  handle(errorResponse: any) {
    let msg: string;
    if(typeof errorResponse === 'string') {
      msg = errorResponse;
    }
     else {
      if( errorResponse instanceof Response) {
        errorResponse = errorResponse.json();
      }

      msg = 'Erro ao processar serviço remoto. Tente novamente.'
      console.log('Ocorreu um erro', errorResponse);
    }
    this.toastyService.error(msg);
  }
}
