import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LavagensService } from '../lavagem.service';

@Component({
  selector: 'app-lavagem-detalhe',
  templateUrl: './lavagem-detalhe.component.html',
  styleUrls: ['./lavagem-detalhe.component.css']
})
export class LavagemDetalheComponent implements OnInit {
    reorderable: boolean = false;
    rows  = new Datatable();

    // rows = [
    //     {id: '1', nome: 'Amaciado'},
    //     {id: '2', nome: 'Resina Siliconada'},

    // ];

    columns=[
        {name: 'Nome', prop: 'nome'},
        {name: 'Actions', prop: 'id',  algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(
      private router:Router,
      private lavagensService: LavagensService, 
      private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.lista();
  }

  editar(row) {   
    this.router.navigate(['/dashboard/lavagens/editar',row])
  }

  novo(){
    this.router.navigate(['/dashboard/lavagens/novo'])
  }

  excluir(value){

  }
  lista(){
    this.spinner.show();
    this.lavagensService.getAll().subscribe(data =>{
        this.rows = data;
        this.spinner.hide();
    }, error=>{
      this.spinner.hide();
    })

  }

}
