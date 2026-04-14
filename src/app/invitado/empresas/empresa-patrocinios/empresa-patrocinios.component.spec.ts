import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaPatrociniosComponent } from './empresa-patrocinios.component';

describe('EmpresaPatrociniosComponent', () => {
  let component: EmpresaPatrociniosComponent;
  let fixture: ComponentFixture<EmpresaPatrociniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresaPatrociniosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaPatrociniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
