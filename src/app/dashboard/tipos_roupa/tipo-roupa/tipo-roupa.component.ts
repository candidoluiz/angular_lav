import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tipo-roupa',
  templateUrl: './tipo-roupa.component.html',
  styleUrls: ['./tipo-roupa.component.css']
})
export class TipoRoupaComponent implements OnInit {

    constructor(private location: Location, private route: ActivatedRoute)  { }

  ngOnInit(): void {
  }

  cancelar(){
    this.location.back();
  }

}
