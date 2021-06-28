import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LavagensService } from '../lavagem.service';

@Component({
  selector: 'app-lavagem',
  templateUrl: './lavagem.component.html',
  styleUrls: ['./lavagem.component.css']
})
export class LavagemComponent implements OnInit {
    formulario: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private location: Location, 
        private route: ActivatedRoute,
        private lavagemService: LavagensService)  { }


  ngOnInit(): void {
    const lavagem = this.route.snapshot.data['lavagem'];
    this.formulario = this.formBuilder.group({
        id: {value: lavagem.id, disabled: true},
        nome: [lavagem.nome],
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

}
