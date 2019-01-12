import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { CategoriaService } from 'app/categorias/categoria.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { Lancamento } from 'app/core/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { ToastyService } from 'ng2-toasty';
import { Utils } from 'app/shared/Utils';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  formulario: FormGroup;
  yearRange: string = (new Date().getFullYear() - 100) + ':' + (new Date().getFullYear());
  maxDate = new Date();
  configuracaoData = Utils.configuracaoData;;

  constructor(
    private lancamentoService: LancamentoService,
    private toasyService: ToastyService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandlerService: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formulario = this.criarFormulario();
    this.title.setTitle('Novo lançamento');
    const codigoLancamento = this.route.snapshot.params.codigo;
    this.carregarLancamento(codigoLancamento);

    this.carregarCategorias();
    this.carregarPessoas();
  }

  criarFormulario(): FormGroup {
    return this.formBuilder.group({
      codigo: [''],
      tipo: ['RECEITA'],
      dataVencimento: ['', Validators.required],
      dataPagamento:[''],
      descricao:['', [Validators.required, Validators.minLength(5)]],
      valor:['', Validators.required],
      pessoa: this.formBuilder.group({
        codigo: ['', Validators.required],
        nome: ['']
      }),
      categoria: this.formBuilder.group({
        codigo: ['', Validators.required],
        nome: ['']
      }),
      observacao: ['']
    });
  }

  carregarLancamento(codigo: number) {
    if(codigo) {
      this.lancamentoService.buscarPorCodigo(codigo)
        .then(lancamento => {
          this.formulario.patchValue(lancamento);
          this.atualizarTituloEdicao();
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
  }

  get editando(): Boolean {
    return Boolean(this.formulario.get('codigo').value);
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

  salvar() {
    if (this.editando) {
      this.atualizar();
    } else {
      this.adicionarNovo();
    }
  }

  adicionarNovo() {
    this.lancamentoService.salvar(this.formulario.value)
      .then(lancamento => {
        this.toasyService.success(`Lancamento salvo com sucesso com o codigo: ${lancamento.codigo}`);
        //form.reset();
        //this.lancamento = new Lancamento();
        this.router.navigate(['/lancamentos', lancamento.codigo]);
      }).catch(error => this.errorHandlerService.handle(error));

  }

  atualizar() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then(lancamento => {
        this.toasyService.success(`Lancamento alterado com sucesso com o codigo: ${lancamento.codigo}`);
        this.atualizarTituloEdicao();
      }).catch(error => this.errorHandlerService.handle(error));
  }

  novo(formControlName) {
    this.formulario.reset({tipo:'RECEITA'});

    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento: ${this.formulario.get('descricao').value}`);
  }
}
