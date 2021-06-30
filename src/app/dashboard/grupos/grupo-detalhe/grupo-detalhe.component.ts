import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';
import { NgxSpinnerService } from "ngx-spinner";
import { GruposService } from '../grupo-roupa.service';
declare const swal: any;

@Component({
  selector: 'app-grupo-detalhe',
  templateUrl: './grupo-detalhe.component.html',
  styleUrls: ['./grupo-detalhe.component.css']
})
export class GrupoDetalheComponent implements OnInit {
    rows = new Datatable();


    columns=[
        {name: '#', prop: 'id'},
        {name: 'Grupo', prop: 'nome'},
        {name: 'Actions', prop: 'id', algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

    constructor(
        private router:Router,
        private gruposService: GruposService,
        private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.lista()
  }

  editar(row) {   
    this.router.navigate(['/dashboard/grupos/editar', row])
  }

  novo(){
    this.router.navigate(['/dashboard/grupos/novo'])
  }

  excluir(value){
    this.gruposService.remove(value).subscribe(data=>{
        swal({
            title: 'Registro excluído!',
            type: 'success',
          });
          this.lista()
    }, error=>{})
  }

  lista(){
    this.spinner.show();
    this.gruposService.getAll().subscribe(data =>{
        this.rows = data;
        this.spinner.hide();
    }, error=>{
      this.spinner.hide();
    })
  }
  openAlert(value){
    swal({
        title: 'Deseja excluir esse registro?',        
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'SIM',
        cancelButtonText: 'NÃO',
      }).then(data=> {          
          if(data){
            this.excluir(value)
          }
      },dismiss=>{});
  }

}
