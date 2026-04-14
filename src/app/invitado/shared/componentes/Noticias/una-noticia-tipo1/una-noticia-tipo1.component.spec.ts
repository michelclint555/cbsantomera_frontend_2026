import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaNoticiaTipo1Component } from './una-noticia-tipo1.component';

describe('UnaNoticiaTipo1Component', () => {
  let component: UnaNoticiaTipo1Component;
  let fixture: ComponentFixture<UnaNoticiaTipo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnaNoticiaTipo1Component]
    });
    fixture = TestBed.createComponent(UnaNoticiaTipo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
