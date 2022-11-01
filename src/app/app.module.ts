import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BindingComponent } from './components/binding/binding.component';

@NgModule({
  //whenever an app is generated, it will be populated here
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
