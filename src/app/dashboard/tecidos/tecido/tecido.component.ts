import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tecido',
  templateUrl: './tecido.component.html',
  styleUrls: ['./tecido.component.css']
})
export class TecidoComponent implements OnInit {
    formulario: FormGroup;

    constructor(
        private location: Location, 
        private route: ActivatedRoute,
        private formBuilder: FormBuilder)  { }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
        id: [null],
        nome: [null],
        composicao: [null],
    });
  }

  cancelar(){
    //this.formulario.reset();
    this.location.back();
  }

  onSubmit(){
    console.log(Object.assign({}, this.formulario.value));
  }

}
