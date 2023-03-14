import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OmdbApiService } from './services/omdb-api.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  { path:'', component:SearchtitleComponent},
  { path:'about', component:AboutComponent},
  { path:'search', component:SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchtitleComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
