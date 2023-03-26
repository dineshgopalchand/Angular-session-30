import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { HeaderComponent } from './common/component/header/header.component';
import { BootstrapPanelComponent } from './common/layout/bootstrap-panel/bootstrap-panel.component';
import { AddressComponent } from './component/address/address.component';
import { ContactModule } from './contact/contact.module';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { DataHandlingComponent } from './data-handling/data-handling.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductModule } from './product/product.module';
import { CourseService } from './services/course.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { SharedModule } from './common/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DataHandlingComponent,
    EventHandlingComponent,
    PipesComponent,
    CourseListComponent,
    CourseItemComponent,
    BootstrapPanelComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ContactModule,
    UserModule,
    AddressComponent,
    ProductModule,
    TodoModule,
  ],
  providers: [CourseService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
