import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tecido',
  templateUrl: './tecido.component.html',
  styleUrls: ['./tecido.component.css']
})
export class TecidoComponent implements OnInit {

    constructor(private location: Location, private route: ActivatedRoute)  { }

  ngOnInit(): void {
  }

  cancelar(){
    this.location.back();
  }

}
