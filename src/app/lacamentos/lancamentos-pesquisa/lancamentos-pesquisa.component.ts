import { Component, OnInit } from '@angular/core';
import { LancamentoService, LacamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {

    const filtro: LacamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    }

    this.lancamentoService.pesquisar(filtro)
    .then(lancamentos => this.lancamentos = lancamentos);
  }
}
