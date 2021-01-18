import { HostListener } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relacao',
  templateUrl: './relacao.component.html',
  styleUrls: ['./relacao.component.css']
})
export class RelacaoComponent implements OnInit {
@Input() item: any;
   
screenHeight: number;
screenWidth: number;

  constructor() {this.getScreenSize(); }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
}
  ngOnInit(): void {
     
  }

  rel=[
    {mapa: '001', ref: '200', quantidade: '1'},
    {mapa: '002', ref: '201', quantidade: '1'},
    {mapa: '003', ref: '202', quantidade: '1'},
    {mapa: '004', ref: '203', quantidade: '1'},
    {mapa: '005', ref: '204', quantidade: '1'},
    {mapa: '006', ref: '205', quantidade: '3'},
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '3'}, 
    {mapa: '007', ref: '206', quantidade: '300'}, 
];

}
