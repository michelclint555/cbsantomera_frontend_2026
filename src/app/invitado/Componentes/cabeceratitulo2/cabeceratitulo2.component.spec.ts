import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabeceratitulo2Component } from './cabeceratitulo2.component';

describe('Cabeceratitulo2Component', () => {
  let component: Cabeceratitulo2Component;
  let fixture: ComponentFixture<Cabeceratitulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cabeceratitulo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabeceratitulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
