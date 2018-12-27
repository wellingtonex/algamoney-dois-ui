import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  nome = 'Wellington';
  adicionado = false;
  id=0;
  @Output() funcionarioAdicionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  adicionar(nome: string) {
    this.nome = nome;
    this.adicionado = true;
    const funcionario = {
      id:++this.id,
      nome:this.nome
    };
    this.funcionarioAdicionado.emit(funcionario);
  }  

}
