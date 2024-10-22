import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import your HomeComponent
import { HttpClientModule } from '@angular/common/http'; // For HttpClient

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HomeComponent ,
  ],
  providers: [HttpClientModule],
  
 

})
export class AppModule { }
