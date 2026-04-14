import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaViewComponent } from './noticia-view.component';

describe('NoticiaViewComponent', () => {
  let component: NoticiaViewComponent;
  let fixture: ComponentFixture<NoticiaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaViewComponent]
    });
    fixture = TestBed.createComponent(NoticiaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
