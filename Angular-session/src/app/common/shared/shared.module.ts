import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LikeComponent } from '../component/like/like.component';
import { InputFormatDirective } from '../directives/input-format.directive';
import { NameValidationDirective } from '../directives/name-validation.directive';
import { SummaryPipe } from '../pipes/summary.pipe';
import { TextFormatingPipe } from '../pipes/text-formating.pipe';

@NgModule({
  declarations: [TextFormatingPipe, LikeComponent, SummaryPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    InputFormatDirective,
    NameValidationDirective,
    ReactiveFormsModule,
  ],
  exports: [
    TextFormatingPipe,
    InputFormatDirective,
    LikeComponent,
    NameValidationDirective,
    SummaryPipe,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
