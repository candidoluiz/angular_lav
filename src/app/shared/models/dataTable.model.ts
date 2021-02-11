export class Datatable {

  totalResultados: number;
  numeroPagina: number 
  tamanhoPagina: number;
  dados: any[];

  constructor() {
    this.numeroPagina = 0;
    this.tamanhoPagina = 10;
    this.totalResultados = 0;
    this.dados = [];
  }
}
