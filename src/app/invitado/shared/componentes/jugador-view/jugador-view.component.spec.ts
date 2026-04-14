import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorViewComponent } from './jugador-view.component';

describe('JugadorViewComponent', () => {
  let component: JugadorViewComponent;
  let fixture: ComponentFixture<JugadorViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadorViewComponent]
    });
    fixture = TestBed.createComponent(JugadorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
