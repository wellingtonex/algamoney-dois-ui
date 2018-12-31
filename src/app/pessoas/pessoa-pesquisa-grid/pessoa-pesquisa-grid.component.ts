import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa-grid',
  templateUrl: './pessoa-pesquisa-grid.component.html',
  styleUrls: ['./pessoa-pesquisa-grid.component.css']
})
export class PessoaPesquisaGridComponent implements OnInit {

  @Input() pessoas = [];

  constructor() { }

  ngOnInit() {
  }

}
