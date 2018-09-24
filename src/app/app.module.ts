import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { HeaderComponent } from './header/header.component';
import { TextService } from './text-service/text.service';

import { WordsinteractionModule } from './modules/words-interaction';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WordsinteractionModule,
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
