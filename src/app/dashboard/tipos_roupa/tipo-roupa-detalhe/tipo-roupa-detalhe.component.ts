import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { TipoRoupaService } from '../tipo-roupa.service';
declare const swal: any;

@Component({
  selector: 'app-tipo-roupa-detalhe',
  templateUrl: './tipo-roupa-detalhe.component.html',
  styleUrls: ['./tipo-roupa-detalhe.component.css']
})
export class TipoRoupaDetalheComponent implements OnInit {
    rows = new Datatable();
    columns=[
        {name: '#', prop: 'id'},
        {name: 'Tipo', prop: 'nome'},
        {name: 'Actions', prop: 'id', algn: 'alinharFim'},
    ];
  loadingIndicator = true;
  reorderable = true;
  messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};



  constructor(private router:Router, 
            private spinner: NgxSpinnerService, 
            private tipoRoupaService:TipoRoupaService) { }

  ngOnInit(): void {
      this.lista()
  }

  excluir(value) {
    this.tipoRoupaService.remove(value).subscribe(data=>{
        swal({
            title: 'Registro excluído!',
            type: 'success',
            //type: 'error',
            //confirmButtonClass: 'btn btn-info'
          });
          this.lista()
    }, error=>{})
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
          if(data){
            this.excluir(value)
          }
      },dismiss=>{});
  }

  editar(row) {   
    this.router.navigate(['/dashboard/tipos-roupa/editar',row])
  }
  novo(){
      this.router.navigate(['/dashboard/tipos-roupa/novo'])
  }
  lista(){
    this.spinner.show();
    this.tipoRoupaService.getAll().subscribe(data =>{
        this.rows = data;
        this.spinner.hide();
    }, error=>{
      this.spinner.hide();
    })
  }

}
