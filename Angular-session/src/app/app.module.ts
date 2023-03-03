import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { DataHandlingComponent } from './data-handling/data-handling.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './common/pipes/summary.pipe';
import { TextFormatingPipe } from './common/pipes/text-formating.pipe';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LikeComponent } from './common/component/like/like.component';
import { BootstrapPanelComponent } from './common/layout/bootstrap-panel/bootstrap-panel.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { DatePipe } from '@angular/common';
import { TodoListComponent } from './common/todo-list/todo-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './common/directives/input-format.directive';
import { NameValidationDirective } from './common/directives/name-validation.directive';
import { ContactModule } from './contact/contact.module';
import { SignUpModule } from './sign-up/sign-up.module';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataHandlingComponent,
    EventHandlingComponent,
    PipesComponent,
    SummaryPipe,
    TextFormatingPipe,
    CourseListComponent,
    CourseItemComponent,
    LikeComponent,
    BootstrapPanelComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    InputFormatDirective,
    NameValidationDirective,
    ContactModule,
    SignUpModule,
  ],
  providers: [CourseService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
