import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
