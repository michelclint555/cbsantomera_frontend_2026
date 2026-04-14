import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorViewInvitadoComponent } from './jugador-view-invitado.component';

describe('JugadorViewInvitadoComponent', () => {
  let component: JugadorViewInvitadoComponent;
  let fixture: ComponentFixture<JugadorViewInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadorViewInvitadoComponent]
    });
    fixture = TestBed.createComponent(JugadorViewInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
