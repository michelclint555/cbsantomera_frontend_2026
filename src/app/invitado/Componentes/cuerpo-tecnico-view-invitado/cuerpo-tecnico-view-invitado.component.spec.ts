import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoTecnicoViewInvitadoComponent } from './cuerpo-tecnico-view-invitado.component';

describe('CuerpoTecnicoViewInvitadoComponent', () => {
  let component: CuerpoTecnicoViewInvitadoComponent;
  let fixture: ComponentFixture<CuerpoTecnicoViewInvitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpoTecnicoViewInvitadoComponent]
    });
    fixture = TestBed.createComponent(CuerpoTecnicoViewInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
