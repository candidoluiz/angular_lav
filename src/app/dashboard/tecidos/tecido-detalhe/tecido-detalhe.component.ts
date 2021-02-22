import { TecidosService } from './../tecidos.service';
import { Datatable } from './../../../shared/models/dataTable.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
declare const swal: any;

@Component({
  selector: 'app-tecido-detalhe',
  templateUrl: './tecido-detalhe.component.html',
  styleUrls: ['./tecido-detalhe.component.css'],
})
export class TecidoDetalheComponent implements OnInit {
    rows = new Datatable();

    columns=[
        {name: 'Nome', prop: 'nome'},
        {name: 'Composição', prop: 'composicao'},
        {name: 'Actions', prop: 'id',  algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    reorderable = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(private router:Router,
            private spinner: NgxSpinnerService, 
            private tecidosService: TecidosService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.lista();
  }

  editar(row) {   
    this.router.navigate(['/dashboard/tecidos/editar'])
  }

  novo(){
    this.router.navigate(['/dashboard/tecidos/novo'])
  }

  excluir(value){
    console.log()
  }

  openAlert(value){
    swal({
        title: 'Deseja excluir esse registro?',
        //text: 'Deseja mesmo excluir esse item?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'SIM',
        cancelButtonText: 'NÃO',
      }).then(data=> {
          //console.log(data);
        swal({
          title: 'Registro excluído!',
          type: 'success',
          //type: 'error',
          confirmButtonClass: 'btn btn-info'
        });
      });
  }

  lista(){
    this.tecidosService.getAll().subscribe(data =>{
        this.rows = data;
        this.spinner.hide();
    }, error=>{
      this.spinner.hide();
    })

  }

}
