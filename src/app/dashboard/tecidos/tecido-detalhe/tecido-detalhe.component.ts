import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editar(row) {   
    this.router.navigate(['/dashboard/tecidos/editar'])
  }

  novo(){
    this.router.navigate(['/dashboard/tecidos/novo'])
  }

}
