import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

grades=[
    {grade: '20', estoque: '0', quantidade: '1'},
    {grade: '21', estoque: '0', quantidade: '1'},
    {grade: '22', estoque: '0', quantidade: '1'},
    {grade: '23', estoque: '0', quantidade: '1'},
    {grade: '24', estoque: '0', quantidade: '1'},
    {grade: '25', estoque: '0', quantidade: '3'},
    {grade: '26', estoque: '0', quantidade: '3'},
];

}
