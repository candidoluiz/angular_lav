import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roupa-detalhe',
  templateUrl: './roupa-detalhe.component.html',
  styleUrls: ['./roupa-detalhe.component.css']
})
export class RoupaDetalheComponent implements OnInit {
    reorderable: boolean = false;

    rows = [
        {id: '1', modelo: '200R', tipo:'Calça',tecido:'Garcez',ano:'2000',estacao:'Primavera'},
        {id: '2', modelo: '201R', tipo:'Flare',tecido:'Oregon Black',ano:'2000',estacao:'Primavera'},
        {id: '3', modelo: '202R', tipo:'Capri',tecido:'Mitanni',ano:'2000',estacao:'Primavera'},
        {id: '4', modelo: '203R', tipo:'Cigarrete',tecido:'Garcez',ano:'2000',estacao:'Primavera'},
    ];
    columns=[
        {name: 'Actions', prop: 'id'},
        {name: 'Modelo', prop: 'modelo'},
        {name: 'Tipo', prop: 'tipo'},
        {name: 'Tecido', prop: 'tecido'},
        {name: 'Ano', prop: 'ano'},
        {name: 'Estação', prop: 'estacao'},
    ];
    loadingIndicator = true;

    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(private router:Router) { }

  ngOnInit(): void {
      
  }

  excluir(value) {
    console.log(value);
  }

  editar(row) {   
    this.router.navigate(['/dashboard/roupas/editar',row])
  }
  novo(){
      this.router.navigate(['/dashboard/roupas/novo'])
  }

}
