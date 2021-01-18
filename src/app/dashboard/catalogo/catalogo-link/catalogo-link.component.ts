import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


export interface PeriodicElement {
    link: number;
    descricao: string;
    usuario: number;
    data_alteracao: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {link: 1, descricao: 'Hydrogen', usuario: 1.0079, data_alteracao: 'H'},
    {link: 2, descricao: 'Helium', usuario: 4.0026, data_alteracao: 'He'},
    {link: 3, descricao: 'Lithium', usuario: 6.941, data_alteracao: 'Li'},
    {link: 4, descricao: 'Beryllium', usuario: 9.0122, data_alteracao: 'Be'},
    {link: 5, descricao: 'Boron', usuario: 10.811, data_alteracao: 'B'},
    {link: 6, descricao: 'Carbon', usuario: 12.0107, data_alteracao: 'C'},
    {link: 7, descricao: 'Nitrogen', usuario: 14.0067, data_alteracao: 'N'},
    {link: 8, descricao: 'Oxygen', usuario: 15.9994, data_alteracao: 'O'},
    {link: 9, descricao: 'Fluorine', usuario: 18.9984, data_alteracao: 'F'},
    {link: 10, descricao: 'Neon', usuario: 20.1797, data_alteracao: 'Ne'},
  ];

  @Component({
    selector: 'app-catalogo-link',
    templateUrl: './catalogo-link.component.html',
    styleUrls: ['./catalogo-link.component.css']
  })

export class CatalogoLinkComponent implements OnInit {

    itens= ELEMENT_DATA;

    displayedColumns: string[] = ['select', 'link', 'descricao', 'usuario', 'data_alteracao'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }

    masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.link + 1}`;
      }

  constructor() { }

  ngOnInit(): void {
  }

}
