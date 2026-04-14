import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoViewComponent } from './partido-view.component';

describe('PartidoViewComponent', () => {
  let component: PartidoViewComponent;
  let fixture: ComponentFixture<PartidoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidoViewComponent]
    });
    fixture = TestBed.createComponent(PartidoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
