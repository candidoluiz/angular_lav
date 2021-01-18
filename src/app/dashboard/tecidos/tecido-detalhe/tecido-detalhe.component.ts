import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecido-detalhe',
  templateUrl: './tecido-detalhe.component.html',
  styleUrls: ['./tecido-detalhe.component.css']
})
export class TecidoDetalheComponent implements OnInit {

    rows = [
        ['as','1'],
        ['as',2],
        ['as',3],
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor() { }

  ngOnInit(): void {
  }

}
