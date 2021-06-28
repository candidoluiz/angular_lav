import { ImagecardComponent } from './../../../shared/imagecard/imagecard.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TecidosService } from '../tecidos.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tecido',
  templateUrl: './tecido.component.html',
  styleUrls: ['./tecido.component.css']
})
export class TecidoComponent implements OnInit {
    formulario: FormGroup;
    id:string = '';

    constructor(
        private location: Location, 
        private route: ActivatedRoute,
        private tecidosService: TecidosService,
        private spinner: NgxSpinnerService, 
        private formBuilder: FormBuilder)  { }

  ngOnInit(){
    const tecido = this.route.snapshot.data['tecido'];
    this.id = tecido.id;
    
    //console.log(tecido)
    this.formulario = this.formBuilder.group({
        id: [tecido.id],
        nome: [tecido.nome,[Validators.required]],
        composicao: [tecido.composicao, [Validators.required]],
    });
  }

  cancelar(){
    //this.formulario.reset();
    this.location.back();
  }

  onSubmit(){
    if(this.formulario.valid){
        this.spinner.show();
        this.tecidosService.save(this.formulario.value).subscribe(data=>{
            this.spinner.hide();
          this.location.back();
        }, error=>{
            this.spinner.hide();
        })
    }
  }

}
