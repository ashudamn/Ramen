import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataGathererService} from './services/data-gatherer.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataDisplayerComponent } from './data-displayer/data-displayer.component';
@NgModule({
  declarations: [
    AppComponent,
    DataDisplayerComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [DataGathererService],
  bootstrap: [AppComponent]
})
export class AppModule { }
