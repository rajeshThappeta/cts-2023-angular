import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { FormArrayTestDemoComponent } from './form-array-test-demo/form-array-test-demo.component';
import { FormEditDemoComponent } from './form-edit-demo/form-edit-demo.component';
import { FormEditDemo2Component } from './form-edit-demo2/form-edit-demo2.component';
import { FormEditDemo3Component } from './form-edit-demo3/form-edit-demo3.component'

@NgModule({
  declarations: [
    AppComponent,
     Test1Component,
     Test2Component,
     Child1Component,
     Child2Component,
     OneComponent,
     TwoComponent,
     FormDemoComponent,
     FormArrayTestDemoComponent,
     FormEditDemoComponent,
     FormEditDemo2Component,
     FormEditDemo3Component
  ],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
