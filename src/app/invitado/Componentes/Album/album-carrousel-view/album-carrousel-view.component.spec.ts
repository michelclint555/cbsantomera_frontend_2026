import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCarrouselViewComponent } from './album-carrousel-view.component';

describe('AlbumCarrouselViewComponent', () => {
  let component: AlbumCarrouselViewComponent;
  let fixture: ComponentFixture<AlbumCarrouselViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumCarrouselViewComponent]
    });
    fixture = TestBed.createComponent(AlbumCarrouselViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
