import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lavagem-detalhe',
  templateUrl: './lavagem-detalhe.component.html',
  styleUrls: ['./lavagem-detalhe.component.css']
})
export class LavagemDetalheComponent implements OnInit {

    rows = [
        {id: '1', nome: 'Amaciado'},
        {id: '2', nome: 'Resina Siliconada'},

    ];

    columns=[
        {name: 'Actions', prop: 'id'},
        {name: 'Nome', prop: 'nome'}
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editar(row) {   
    this.router.navigate(['/dashboard/lavagens/editar',row])
  }

  novo(){
    this.router.navigate(['/dashboard/lavagens/novo'])
  }

  excluir(value){

  }

}
