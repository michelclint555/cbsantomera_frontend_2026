import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorView2Component } from './jugador-view2.component';

describe('JugadorView2Component', () => {
  let component: JugadorView2Component;
  let fixture: ComponentFixture<JugadorView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JugadorView2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadorView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
