import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'app/categorias/categoria.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { Lancamento } from 'app/core/model';
import { FormControl } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();


  constructor(
    private lancamentoService: LancamentoService,
    private toasyService: ToastyService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    this.categoriaService.listarTodas()
      .then(categorias => this.categorias = categorias.map(c => ({label: c.nome, value: c.codigo})))
      .catch(error => this.errorHandlerService.handle(error));
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => this.pessoas = pessoas.map(p => ({label:p.nome, value:p.codigo})))
      .catch(error => this.errorHandlerService.handle(error));
  }

  salvar(form: FormControl) {
    this.lancamentoService.salvar(this.lancamento)
      .then(lancamento => {
        this.toasyService.success(`Lancamento salvo com sucesso com o codigo: ${lancamento.codigo}`);
        form.reset();
        this.lancamento = new Lancamento();
      }).catch(error => this.errorHandlerService.handle(error));

  }
}
