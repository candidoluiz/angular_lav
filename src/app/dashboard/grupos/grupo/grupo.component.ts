import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

    constructor(private location: Location, private route: ActivatedRoute)  { }

  ngOnInit(): void {
  }

  cancelar(){
    this.location.back();
  }

}
