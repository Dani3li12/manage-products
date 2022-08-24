import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReversePipe } from './reverse.pipe';
import { InchToCmPipe } from './inch-to-cm.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleFormComponent } from './components/reactive/simple-form/simple-form.component';
import { GroupFormControlComponent } from './components/reactive/group-form-control/group-form-control.component';
import { BuiltInValidatorComponent } from './components/reactive/built-in-validator/built-in-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CommentsComponent,
    DashboardComponent,
    ReversePipe,
    InchToCmPipe,
    SimpleFormComponent,
    GroupFormControlComponent,
    BuiltInValidatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
