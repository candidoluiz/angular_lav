import { Roupa } from './../roupa.model';
import { RoupasService } from './../roupas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';

@Component({
  selector: 'app-roupa-detalhe',
  templateUrl: './roupa-detalhe.component.html',
  styleUrls: ['./roupa-detalhe.component.css']
})
export class RoupaDetalheComponent implements OnInit {
    reorderable: boolean = false;
    minha = 'luiz';
    rows  = new Datatable();

    columns=[
        {name: 'Modelo', prop: 'modelo'},
        {name: 'Tipo', prop: 'tipo'},
        {name: 'Tecido', prop: 'tecido'},
        {name: 'Ano', prop: 'ano'},
        {name: 'Estação', prop: 'estacao'},
        {name: 'Actions', prop: 'id', algn: 'alinharFim'},
    ];
    loadingIndicator = true;

    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(private router:Router, private roupaService: RoupasService) { }

  ngOnInit(): void {
    this.roupaService.getAll().subscribe(data =>{
        this.rows = data;

    });
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
