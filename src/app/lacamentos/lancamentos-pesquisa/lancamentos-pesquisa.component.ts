import { Component, OnInit } from '@angular/core';
import { LancamentoService, LacamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  filtro = new LacamentoFiltro();
  totalRegistros = 0;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {    
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
    .then(response => {
      this.lancamentos = response.content;
      this.totalRegistros = response.totalElements
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    console.log(event);
    const pagina = event.first/event.rows;
    this.pesquisar(pagina);
  }

  handleRowSelect(event: any) {
    // simply logging the event
    console.log('row unselect : ', event);
  }
}
