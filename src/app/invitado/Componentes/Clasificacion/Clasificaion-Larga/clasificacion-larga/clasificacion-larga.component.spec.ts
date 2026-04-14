import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionLargaComponent } from './clasificacion-larga.component';

describe('ClasificacionLargaComponent', () => {
  let component: ClasificacionLargaComponent;
  let fixture: ComponentFixture<ClasificacionLargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasificacionLargaComponent]
    });
    fixture = TestBed.createComponent(ClasificacionLargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
