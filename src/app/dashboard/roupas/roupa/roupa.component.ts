import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css']
})
export class RoupaComponent implements OnInit {
    formulario: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private location: Location, 
        private route: ActivatedRoute)  { }

  ngOnInit(): void {
      console.log(this.route.snapshot.params.id)
      
      this.formulario = this.formBuilder.group({
        id: [null],
        modelo: [null],
        ano: [null],
        estacao: [null],
        tipo: [null],
        tecido: [null]
    });
    this.maiuscula();
  }
  

  cancelar(){
    // this.location.back();
    // this.formulario.reset();

  }

  onSubmit(){

    //console.log( JSON.stringify(this.formulario.value));
    Object.keys(this.formulario.value).forEach(key => {
        console.log(this.formulario.value[key]); // the value of the current key.
      });
    
  }

  maiuscula(){
    this.formulario.valueChanges.subscribe(val => {
        this.formulario.value.modelo = this.formulario.value.modelo.toUpperCase();
    })

  }

}
