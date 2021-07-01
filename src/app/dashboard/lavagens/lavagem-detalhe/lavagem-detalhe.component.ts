import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datatable } from 'app/shared/models/dataTable.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LavagensService } from '../lavagem.service';
declare const swal: any;

@Component({
  selector: 'app-lavagem-detalhe',
  templateUrl: './lavagem-detalhe.component.html',
  styleUrls: ['./lavagem-detalhe.component.css']
})
export class LavagemDetalheComponent implements OnInit {
    reorderable: boolean = false;
    rows  = new Datatable();

    columns=[
        {name: '#', prop: 'id'},
        {name: 'Nome', prop: 'nome'},
        {name: 'Actions', prop: 'id',  algn: 'alinharFim'},
    ];
    loadingIndicator = true;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};

  constructor(
      private router:Router,
      private lavagensService: LavagensService, 
      private spinner: NgxSpinnerService) { }

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
    this.lavagensService.remove(value).subscribe(data=>{
        swal({
            title: 'Registro excluído!',
            type: 'success',
          });
          this.lista()
    }, error=>{})

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
