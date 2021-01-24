import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecido-detalhe',
  templateUrl: './tecido-detalhe.component.html',
  styleUrls: ['./tecido-detalhe.component.css']
})
export class TecidoDetalheComponent implements OnInit {
    rows = [
        {id: '1', nome: 'Garcez', composicao:'100% algodão'},
        {id: '2', nome: 'Mitani', composicao:'98% poliéster'},

    ];

    columns=[
        {name: 'Actions', prop: 'id'},
        {name: 'Nome', prop: 'nome'},
        {name: 'Composição', prop: 'composicao'},
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

  excluir(value){

  }

}
