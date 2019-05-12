import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { AdvertenciasComponent } from './advertencias/advertencias.component';
import { AnalizeComponent } from './analize/analize.component';
import { ResultComponent } from './result/result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StartComponent,
    AdvertenciasComponent,
    AnalizeComponent,
    ResultComponent,
    FileUploadComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
