import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditPageComponent } from './artist-edit-page.component';

describe('ArtistEditPageComponent', () => {
  let component: ArtistEditPageComponent;
  let fixture: ComponentFixture<ArtistEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
