import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LacamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  filtro = new LacamentoFiltro();
  totalRegistros = 0;
  @ViewChild('tabela') grid;

  constructor(
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService
    ) { }

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

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        if(this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }
        this.toastyService.success('Lançamento excluido com sucesso.')
      });

  }
}
