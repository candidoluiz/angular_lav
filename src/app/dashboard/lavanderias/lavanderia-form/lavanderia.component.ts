import { Observable } from 'rxjs';
import { Uf } from 'app/shared/models/uf.model';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LavanderiaService } from '../lavanderia.service';
import { UfService } from 'app/services/uf.service';

@Component({
  selector: 'app-lavanderia',
  templateUrl: './lavanderia.component.html',
  styleUrls: ['./lavanderia.component.css']
})
export class LavanderiaComponent implements OnInit {
    formulario: FormGroup;
    //ufs: Uf[];
    ufs: Observable<Uf[]>;
    id:string = '';

  constructor(
        private location: Location,
        private ufService: UfService,
        private route: ActivatedRoute,
        private lavanderiaService: LavanderiaService,
        private spinner: NgxSpinnerService,
        private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.listarUf()
    const lavanderia = this.route.snapshot.data['lavanderia'];
    this.id = lavanderia.id
    this.formulario = this.formBuilder.group({
        id:         [lavanderia.id],
        nome:       [lavanderia.nome],
        cnpj:       [lavanderia.cnpj],
        telefone:   [lavanderia.telefone],
        endereco:   [lavanderia.endereco],
        numero:     [lavanderia.numero],
        uf:         [lavanderia.uf],
        cidade:     [lavanderia.cidade],
        cep:        [lavanderia.cep],
    });
  }
  cancelar(){    
    this.location.back();
  }
  onSubmit(){
    if(this.formulario.valid){
        this.spinner.show();
        this.lavanderiaService.save(this.formulario.value).subscribe(data=>{
            this.spinner.hide();
          this.location.back();
        }, error=>{
            this.spinner.hide();
        })
    }
  }

  listarUf(){
    //tirado o subscrible para faazer o async
    this.ufs = this.ufService.listarParaSelecionar()

  }

}
