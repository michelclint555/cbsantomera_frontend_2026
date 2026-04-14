import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoViewComponent } from './equipo-view.component';

describe('EquipoViewComponent', () => {
  let component: EquipoViewComponent;
  let fixture: ComponentFixture<EquipoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoViewComponent]
    });
    fixture = TestBed.createComponent(EquipoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
