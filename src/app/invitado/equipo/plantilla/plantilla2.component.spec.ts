import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantilla2Component } from './plantilla2.component';

describe('PlantillaComponent', () => {
  let component: Plantilla2Component;
  let fixture: ComponentFixture<Plantilla2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Plantilla2Component]
    });
    fixture = TestBed.createComponent(Plantilla2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
