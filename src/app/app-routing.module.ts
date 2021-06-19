import { AlbumsEditPageComponent } from './pages/albums-page/pages/albums-edit-page/albums-edit-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full'},
  { path: 'albums', component: AlbumsPageComponent, pathMatch: 'full' },
  { path: 'albums/edit', component: AlbumsEditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
