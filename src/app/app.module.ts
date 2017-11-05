import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.route';

import { AppComponent } from './app.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { ListAnimalComponent } from './list-animal/list-animal.component';
import { AppFilterPipe } from './app-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditAnimalComponent,
    AddAnimalComponent,
    ListAnimalComponent,
    AppFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
