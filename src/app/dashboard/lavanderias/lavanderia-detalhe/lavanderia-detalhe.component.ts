import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lavanderia-detalhe',
  templateUrl: './lavanderia-detalhe.component.html',
  styleUrls: ['./lavanderia-detalhe.component.css']
})
export class LavanderiaDetalheComponent implements OnInit {

    rows = [
        {id: '1', nome: 'Pluma', cidade:'Cia Norte'},
        {id: '2', nome: 'Turquinho', cidade:'Rio Preto'},

    ];

    columns=[
        {name: 'Nome', prop: 'nome'},
        {name: 'Cidade', prop: 'cidade'},
        {name: 'Actions', prop: 'id', algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

    constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editar(row) {   
    this.router.navigate(['/dashboard/lavanderias/editar', row])
  }

  novo(){
    this.router.navigate(['/dashboard/lavanderias/novo'])
  }

  excluir(value){

  }

}
