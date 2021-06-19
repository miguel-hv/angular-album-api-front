import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { AlbumsService } from './shared/services/albums.service';
import { AlbumsEditPageComponent } from './pages/albums-page/pages/albums-edit-page/albums-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    GalleryComponent,
    AlbumsEditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
