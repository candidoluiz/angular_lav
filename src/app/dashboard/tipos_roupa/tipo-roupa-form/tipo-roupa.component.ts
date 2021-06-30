import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoRoupaService } from '../tipo-roupa.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-tipo-roupa',
  templateUrl: './tipo-roupa.component.html',
  styleUrls: ['./tipo-roupa.component.css']
})
export class TipoRoupaComponent implements OnInit {
    formulario: FormGroup;
    id:string = '';

    constructor(
        private location: Location, 
        private route: ActivatedRoute,
        private tipoRoupaService: TipoRoupaService,
        private spinner: NgxSpinnerService, 
        private formBuilder: FormBuilder)  { }

  ngOnInit(): void {
    const tipoRoupa = this.route.snapshot.data['tipoRoupa'];
    this.id = tipoRoupa.id;
    
    this.formulario = this.formBuilder.group({
        id: [tipoRoupa.id],
        nome: [tipoRoupa.nome,[Validators.required]],
    });
  }

  cancelar(){
    this.location.back();
  }

  onSubmit(){
    if(this.formulario.valid){
        this.spinner.show();
        this.tipoRoupaService.save(this.formulario.value).subscribe(data=>{
            this.spinner.hide();
          this.location.back();
        }, error=>{
            this.spinner.hide();
        })
    }

  }

}
