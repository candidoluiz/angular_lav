import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { LavagensService } from 'app/dashboard/lavagens/lavagem.service';
import { Datatable } from 'app/shared/models/dataTable.model';


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

    // rows = [
    //     {id: '1', nome: 'Amaciado'},
    //     {id: '2', nome: 'Resina Siliconada'},
    //     {id: '3', nome: 'Puido'},

    // ];

    constructor(
        private formBuilder: FormBuilder,
        private location: Location, 
        private route: ActivatedRoute,
        private lavagensService: LavagensService)  { }

  ngOnInit(): void {
      //console.log(this.route.snapshot.params.id)
      const roupa = this.route.snapshot.data['roupa'];
      console.log(roupa);
      
      this.formulario = this.formBuilder.group({
        id: {value: roupa.id, disabled: true},
        modelo: [roupa.modelo],
        ano: [roupa.ano],
        estacao: [roupa.estacao],
        tipo: [roupa.tipo],
        tecido: [roupa.tecido]
    });
    this.maiuscula();
    this.listarLavagemDisponivel();
  }
  

  cancelar(){
     this.location.back();
    // this.formulario.reset();

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

}
