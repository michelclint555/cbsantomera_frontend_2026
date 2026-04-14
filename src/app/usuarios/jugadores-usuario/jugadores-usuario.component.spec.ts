import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresUsuarioComponent } from './jugadores-usuario.component';

describe('JugadoresUsuarioComponent', () => {
  let component: JugadoresUsuarioComponent;
  let fixture: ComponentFixture<JugadoresUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadoresUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
