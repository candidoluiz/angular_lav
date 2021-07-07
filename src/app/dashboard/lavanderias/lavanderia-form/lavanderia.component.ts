import { Cidade } from './../../../shared/models/cidade.model';
import { empty, Observable } from 'rxjs';
import { Uf } from 'app/shared/models/uf.model';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LavanderiaService } from '../lavanderia.service';
import { UfService } from 'app/services/uf.service';
import { CidadeService } from 'app/services/cidade.service';
import { tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lavanderia',
  templateUrl: './lavanderia.component.html',
  styleUrls: ['./lavanderia.component.css']
})
export class LavanderiaComponent implements OnInit {
    formulario: FormGroup;
    ufs: Uf[];
    cidades: Cidade[];
    //ufs: Observable<Uf[]>;
    id:string = '';   

  constructor(
        private location: Location,
        private ufService: UfService,
        private cidadeService: CidadeService,
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
        cidade:     this.formCidade(lavanderia.cidade),
        cep:        [lavanderia.cep],
    });

    this.formulario.get('cidade.uf').valueChanges
    .pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        tap(e=> this.formulario.get('cidade').patchValue({id:null,nome:null})),
        //map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
        switchMap((estadoId: number) => this.cidadeService.getCidade(parseInt(estadoId['id']))),
        //tap(w=>console.log(this.ufs))
    )
    .subscribe(cidades => {
        this.cidades = cidades
        //this.formulario.get('cidade').patchValue({id:null,nome:null})
    });
    //this.listarCidades(teste.id);
    this.getCidades(this.formulario.get('cidade.uf.id').value)



  }
  cancelar(){    
    this.location.back();
  }
  formCidade(cidade){
    return this.formBuilder.group({
        id: [cidade?.id],
        nome: [cidade?.nome],
        uf: this.formUf(cidade?.uf)
    })
  }
  formUf(uf){
    //console.log(uf)
        return this.formBuilder.group({
          id: uf?.id,
          //uf: [null]

      })
  }
  onSubmit(){
      console.log(this.formulario.value)
      return;
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
    //this.ufs = this.ufService.listarParaSelecionar()
    this.ufService.listarParaSelecionar().subscribe(data=>{
        this.ufs = data
    })
  }
  getCidades(uf:number){
    this.cidadeService.getCidade(uf).subscribe(data =>{
        this.cidades = data
    })
  }

}
