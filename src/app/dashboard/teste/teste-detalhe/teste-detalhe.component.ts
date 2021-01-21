import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-detalhe',
  templateUrl: './teste-detalhe.component.html',
  styleUrls: ['./teste-detalhe.component.css']
})
export class TesteDetalheComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  novo(){
    this.router.navigate(['/dashboard/teste/novo'])
  }

}
