import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import the router module and routes
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const routes: Routes = [ // Define your routes
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Add the router module and routes to your imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
