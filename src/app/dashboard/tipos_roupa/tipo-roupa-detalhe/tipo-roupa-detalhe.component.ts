import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-roupa-detalhe',
  templateUrl: './tipo-roupa-detalhe.component.html',
  styleUrls: ['./tipo-roupa-detalhe.component.css']
})
export class TipoRoupaDetalheComponent implements OnInit {
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
