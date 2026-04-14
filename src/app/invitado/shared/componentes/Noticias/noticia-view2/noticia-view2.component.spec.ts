import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaView2Component } from './noticia-view2.component';

describe('NoticiaView2Component', () => {
  let component: NoticiaView2Component;
  let fixture: ComponentFixture<NoticiaView2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaView2Component]
    });
    fixture = TestBed.createComponent(NoticiaView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
