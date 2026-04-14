import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionCortaComponent } from './clasificacion-corta.component';

describe('ClasificacionCortaComponent', () => {
  let component: ClasificacionCortaComponent;
  let fixture: ComponentFixture<ClasificacionCortaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasificacionCortaComponent]
    });
    fixture = TestBed.createComponent(ClasificacionCortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
