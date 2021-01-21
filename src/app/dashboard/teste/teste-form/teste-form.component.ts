import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.css']
})
export class TesteFormComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit(): void {
    }
  
}
