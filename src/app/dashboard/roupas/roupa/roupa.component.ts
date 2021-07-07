import { Lavagem } from './../../lavagens/lavagem.model';
import { Tecido } from './../../tecidos/tecido.model';
import { TecidosService } from './../../tecidos/tecidos.service';
import { TipoRoupaService } from './../../tipos_roupa/tipo-roupa.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { LavagensService } from 'app/dashboard/lavagens/lavagem.service';
import { Datatable } from 'app/shared/models/dataTable.model';
import { TipoRoupa } from 'app/dashboard/tipos_roupa/tipo-roupa.model';


@Component({
  selector: 'app-roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css']
})
export class RoupaComponent implements OnInit {
    formulario: FormGroup;
    messages = {emptyMessage: `<span class="text-info">Sem Resultados</span>`};
    columns=[
        {name: 'Lavagem', prop: 'nome', sortable: false},
    ];
    rows = new Datatable();
    tiposRoupa: TipoRoupa[];
    tecidos: Tecido[];
    id:string = '';
    selected = [];
    lavagens = []

    constructor(
        private formBuilder: FormBuilder,
        private location: Location, 
        private route: ActivatedRoute,
        private tipoRoupaService: TipoRoupaService,
        private tecidoService: TecidosService,
        private lavagensService: LavagensService)  { }

  ngOnInit(): void {      
    this.createForm();
    this.maiuscula();
    this.listarLavagemDisponivel();
    this.getTipoRoupa()
    this.getTecido();
  }

  createForm(){
    const roupa = this.route.snapshot.data['roupa'];
    this.id = roupa.id
    this.formulario = this.formBuilder.group({
        id: [roupa.id],
        modelo: [roupa.modelo],
        ano: [roupa.ano],
        estacao: [roupa.estacao],
        tipo: [roupa?.id],
        tecido: [roupa.tecido?.id],
        lavagem: [roupa.lavagem]
    });
  }
  

  cancelar(){
     this.location.back();
  }

  onSubmit(){

    //console.log( JSON.stringify(this.formulario.value));
    Object.keys(this.formulario.value).forEach(key => {
        console.log(this.formulario.value[key]); // the value of the current key.
      });
    
  }

  listarLavagemDisponivel(){
    //this.spinner.show();
    this.lavagensService.getAllDisponivel().subscribe(data =>{
        this.rows = data;
        console.log(data)
        //this.spinner.hide();
    }, error=>{
      //this.spinner.hide();
    })
  }

  maiuscula(){
    this.formulario.valueChanges.subscribe(val => {
        this.formulario.value.modelo = this.formulario.value.modelo.toUpperCase();
    })
  }
  getTipoRoupa(){
    this.tipoRoupaService.listarParaSelecionar().subscribe(data => {
        this.tiposRoupa = data;
    })
  }
  getTecido(){
    this.tecidoService.listarParaSelecionar().subscribe(data => {
        this.tecidos = data;
    })
  }
  addLavagem(event){
    const lav:Lavagem = this.selected[0]
    let index = this.rows.dados.findIndex(i=>i.id == this.selected[0].id)
    this.lavagens.push(lav)
    //console.log(this.rows.dados.findIndex(i=>i.id == this.selected[0].id))
    this.rows.dados.splice(index,1)
    this.rows.dados = [...this.rows.dados]
    this.lavagens =[...this.lavagens]

  }
  onActivate(event) {
    //console.log('Activate Event', event);
  }
}
