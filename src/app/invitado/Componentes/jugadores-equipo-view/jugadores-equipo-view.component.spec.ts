import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresEquipoViewComponent } from './jugadores-equipo-view.component';

describe('JugadoresEquipoViewComponent', () => {
  let component: JugadoresEquipoViewComponent;
  let fixture: ComponentFixture<JugadoresEquipoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadoresEquipoViewComponent]
    });
    fixture = TestBed.createComponent(JugadoresEquipoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
