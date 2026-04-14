import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeclaveComponent } from './changeclave.component';

describe('ChangeclaveComponent', () => {
  let component: ChangeclaveComponent;
  let fixture: ComponentFixture<ChangeclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeclaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
