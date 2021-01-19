import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html'
})
export class TesteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  novo(){
    this.router.navigate(['/tes'])
  }

}
