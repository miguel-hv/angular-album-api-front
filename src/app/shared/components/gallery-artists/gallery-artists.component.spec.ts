import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArtistsComponent } from './gallery-artists.component';

describe('GalleryArtistsComponent', () => {
  let component: GalleryArtistsComponent;
  let fixture: ComponentFixture<GalleryArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
