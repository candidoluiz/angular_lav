import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-lavagem',
  templateUrl: './lavagem.component.html',
  styleUrls: ['./lavagem.component.css']
})
export class LavagemComponent implements OnInit {

    constructor(private location: Location, private route: ActivatedRoute)  { }


  ngOnInit(): void {
  }

  cancelar(){
    this.location.back();
  }

}
