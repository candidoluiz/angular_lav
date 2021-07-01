import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { GruposService } from '../grupo-roupa.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
    formulario: FormGroup;
    id:string = '';

    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private gruposService: GruposService,
        private route: ActivatedRoute)  { }

  ngOnInit(): void {
    const grupo = this.route.snapshot.data['grupoRoupa'];
    this.id = grupo.id;

    this.formulario = this.formBuilder.group({
        id:     [grupo.id],
        nome:   [grupo.nome,[Validators.required]],
    });
  }

  cancelar(){
    this.location.back();
  }
  onSubmit(){
    if(this.formulario.valid){
        this.spinner.show();
        this.gruposService.save(this.formulario.value).subscribe(data=>{
            //this.spinner.hide();
          this.location.back();
        }, error=>{
            this.spinner.hide();
        })
    }
  }

}
