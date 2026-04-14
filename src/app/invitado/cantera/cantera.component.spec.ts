import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteraComponent } from './cantera.component';

describe('CanteraComponent', () => {
  let component: CanteraComponent;
  let fixture: ComponentFixture<CanteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
