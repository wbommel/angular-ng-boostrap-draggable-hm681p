import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DraggableModalComponent } from './modal/draggable-modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, DraggableModalComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [DraggableModalComponent]
})
export class AppModule { }
