import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-roupa-detalhe',
  templateUrl: './tipo-roupa-detalhe.component.html',
  styleUrls: ['./tipo-roupa-detalhe.component.css']
})
export class TipoRoupaDetalheComponent implements OnInit {
    rows = [
        {id: '1', nome: 'Calça'},
        {id: '2', nome: 'Bermuda'},
        {id: '3', nome: 'Saia'},
        {id: '4', nome: 'Vestido'},
    ];
    columns=[
        {name: 'Actions', prop: 'id'},
        {name: 'Tipo', prop: 'nome'}
    ];
  loadingIndicator = true;
  reorderable = true;
  messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  excluir(value) {
    console.log(value);
  }

  editar(row) {   
    this.router.navigate(['/dashboard/tipos-roupa/editar',row])
  }
  novo(){
      this.router.navigate(['/dashboard/tipos-roupa/novo'])
  }

}
