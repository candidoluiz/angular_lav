import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LavanderiaService } from '../lavanderia.service';
declare const swal: any;

@Component({
  selector: 'app-lavanderia-detalhe',
  templateUrl: './lavanderia-detalhe.component.html',
  styleUrls: ['./lavanderia-detalhe.component.css']
})
export class LavanderiaDetalheComponent implements OnInit {
    reorderable: boolean = false;
    rows  = new Datatable();

    columns=[
        {name: '#', prop: 'id'},
        {name: 'Nome', prop: 'nome'},
        {name: 'Cidade', prop: 'cidade.nome'},
        {name: 'Telefone', prop: 'telefone'},
        {name: 'Actions', prop: 'id', algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

    constructor(
        private router:Router,
        private lavanderiaService: LavanderiaService, 
        private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.lista();
  }

  editar(row) {   
    this.router.navigate(['/dashboard/lavanderias/editar', row])
  }

  novo(){
    this.router.navigate(['/dashboard/lavanderias/novo'])
  }

  excluir(value){

  }
  lista(){
    this.spinner.show();
    this.lavanderiaService.getAll().subscribe(data =>{
        //console.log(data)
        this.rows = data;
        this.spinner.hide();
    }, error=>{
      this.spinner.hide();
    })

  }

}
