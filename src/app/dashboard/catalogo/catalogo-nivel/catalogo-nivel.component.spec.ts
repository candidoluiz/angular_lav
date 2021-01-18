import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoNivelComponent } from './catalogo-nivel.component';

describe('CatalogoNivelComponent', () => {
  let component: CatalogoNivelComponent;
  let fixture: ComponentFixture<CatalogoNivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoNivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
