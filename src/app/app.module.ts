import { EmployeeService } from './employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BindingComponent } from './components/binding/binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

@NgModule({
  //whenever an app is generated, it will be populated here
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    StructuralDirectivesComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
