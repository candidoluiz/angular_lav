import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css']
})
export class RoupaComponent implements OnInit {

    constructor(private location: Location, private route: ActivatedRoute)  { }

  ngOnInit(): void {
      console.log(this.route.snapshot.params.id)
  }

  cancelar(){
    this.location.back();
  }

}
