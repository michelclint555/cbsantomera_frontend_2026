import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaNoticiaTipo3Component } from './una-noticia-tipo3.component';

describe('UnaNoticiaTipo3Component', () => {
  let component: UnaNoticiaTipo3Component;
  let fixture: ComponentFixture<UnaNoticiaTipo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnaNoticiaTipo3Component]
    });
    fixture = TestBed.createComponent(UnaNoticiaTipo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
