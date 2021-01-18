import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDetalheComponent } from './ficha-detalhe.component';

describe('FichaDetalheComponent', () => {
  let component: FichaDetalheComponent;
  let fixture: ComponentFixture<FichaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
