import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa-grid',
  templateUrl: './lancamento-pesquisa-grid.component.html',
  styleUrls: ['./lancamento-pesquisa-grid.component.css']
})
export class LancamentoPesquisaGridComponent implements OnInit {

  @Input() lancamentos = [];

  constructor() { }

  ngOnInit() {
  }

}
