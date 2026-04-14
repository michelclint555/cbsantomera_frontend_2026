import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoView2Component } from './partido-view2.component';

describe('PartidoView2Component', () => {
  let component: PartidoView2Component;
  let fixture: ComponentFixture<PartidoView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoView2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
