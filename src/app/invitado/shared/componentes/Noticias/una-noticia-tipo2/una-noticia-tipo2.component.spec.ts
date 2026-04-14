import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaNoticiaTipo2Component } from './una-noticia-tipo2.component';

describe('UnaNoticiaTipo2Component', () => {
  let component: UnaNoticiaTipo2Component;
  let fixture: ComponentFixture<UnaNoticiaTipo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnaNoticiaTipo2Component]
    });
    fixture = TestBed.createComponent(UnaNoticiaTipo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
