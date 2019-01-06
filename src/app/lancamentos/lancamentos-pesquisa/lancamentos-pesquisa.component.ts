import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LacamentoFiltro } from '../lancamento.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

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
    private toastyService: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandleService: ErrorHandlerService,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Lançamentos')
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
    .then(response => {
      this.lancamentos = response.content;
      this.totalRegistros = response.totalElements
    }).catch(erro => this.errorHandleService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    //console.log(event);
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
    }).catch(erro => this.errorHandleService.handle(erro))
  }

  confirmarExclusao(lancamento: any) {
    console.log('chamando confirma exclusao...');

    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => this.excluir(lancamento)
    });
  }
}
