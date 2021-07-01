import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LavagensService } from '../lavagem.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lavagem',
  templateUrl: './lavagem.component.html',
  styleUrls: ['./lavagem.component.css']
})
export class LavagemComponent implements OnInit {
    formulario: FormGroup;
    id:string = '';

    constructor(
        private formBuilder: FormBuilder,
        private location: Location, 
        private route: ActivatedRoute,
        private spinner: NgxSpinnerService, 
        private lavagemService: LavagensService)  { }


  ngOnInit(): void {
    const lavagem = this.route.snapshot.data['lavagem'];
    this.id = lavagem.id
    this.formulario = this.formBuilder.group({
        id:     [lavagem.id],
        nome:   [lavagem.nome],
    });
  }

  cancelar(){
    this.location.back();
  }
  onSubmit(){

    //console.log( JSON.stringify(this.formulario.value));
    //Object.keys(this.formulario.value).forEach(key => {
    //    console.log(this.formulario.value[key]);
    //  });
    if(this.formulario.valid){
        this.spinner.show();
        this.lavagemService.save(this.formulario.value).subscribe(data=>{
            this.spinner.hide();
          this.location.back();
        }, error=>{
            this.spinner.hide();
        })
    }
    
  }

}
