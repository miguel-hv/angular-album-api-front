import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsEditPageComponent } from './albums-edit-page.component';

describe('AlbumsEditPageComponent', () => {
  let component: AlbumsEditPageComponent;
  let fixture: ComponentFixture<AlbumsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
