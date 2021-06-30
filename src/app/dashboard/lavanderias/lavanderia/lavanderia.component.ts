import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lavanderia',
  templateUrl: './lavanderia.component.html',
  styleUrls: ['./lavanderia.component.css']
})
export class LavanderiaComponent implements OnInit {

  constructor( private location: Location, ) { }

  ngOnInit(): void {
  }
  cancelar(){
    //this.formulario.reset();
    this.location.back();
  }

}
