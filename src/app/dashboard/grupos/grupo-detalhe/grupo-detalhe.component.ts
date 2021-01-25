import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo-detalhe',
  templateUrl: './grupo-detalhe.component.html',
  styleUrls: ['./grupo-detalhe.component.css']
})
export class GrupoDetalheComponent implements OnInit {

    rows = [
        {id: '1', nome: 'Calça'},
        {id: '2', nome: 'Bermuda'},

    ];

    columns=[
        {name: 'Actions', prop: 'id'},
        {name: 'Grupo', prop: 'nome'}        
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

    constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editar(row) {   
    this.router.navigate(['/dashboard/grupos/editar', row])
  }

  novo(){
    this.router.navigate(['/dashboard/grupos/novo'])
  }

  excluir(value){

  }

}
