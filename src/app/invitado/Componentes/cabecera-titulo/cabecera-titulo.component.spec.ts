import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraTituloComponent } from './cabecera-titulo.component';

describe('CabeceraTituloComponent', () => {
  let component: CabeceraTituloComponent;
  let fixture: ComponentFixture<CabeceraTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabeceraTituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
