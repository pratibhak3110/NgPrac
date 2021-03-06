import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoappComponent } from './demoapp/demoapp.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemonewComponent } from './demonew/demonew.component';
import { HighLighterDirective } from './high-lighter.directive';
import { UserComponent } from './user/user.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CreditCardDirective } from './credit-card.directive';
import { HeaderComponent } from './header/header.component';
import { arrRouting } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { EmpComponent } from './emp/emp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Logint6Component } from './logint6/logint6.component';
import { Registert6Component } from './registert6/registert6.component';
import { Productt6Component } from './productt6/productt6.component';
import { Cartt6Component } from './cartt6/cartt6.component';
import { Headert6Component } from './headert6/headert6.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RegDatat6Directive } from './reg-datat6.directive';
import { EparentComponent } from './eparent/eparent.component';
import { EchildComponent } from './echild/echild.component';
import { SignupComponent } from './signup/signup.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { ArraytestComponent } from './arraytest/arraytest.component';
import { ConnectingUserComponent } from './connecting-user/connecting-user.component';
import { EmpeditComponent } from './todo/empedit/empedit.component';
import { ProducteditComponent } from './todo/productedit/productedit.component';
import { EmpRecordComponent } from './emp-record/emp-record.component';
import { EmpBasicComponent } from './emp-record/emp-basic/emp-basic.component';
import { EmpPersonalComponent } from './emp-record/emp-personal/emp-personal.component';
import { EmpExpComponent } from './emp-record/emp-exp/emp-exp.component';
import { EmpBasicEditComponent } from './emp-record/emp-basic/emp-basic-edit/emp-basic-edit.component';
import { EmpBankComponent } from './emp-record/emp-personal/emp-bank/emp-bank.component';
import { EmpAddressComponent } from './emp-record/emp-personal/emp-address/emp-address.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoappComponent,
    TodoComponent,
    DemonewComponent,
    HighLighterDirective,
    UserComponent,
    CustomDirDirective,
    CreditCardDirective,
    HeaderComponent,
    FooterComponent,
    EmpComponent,
    PagenotfoundComponent,
    Logint6Component,
    Registert6Component,
    Productt6Component,
    Cartt6Component,
    Headert6Component,
    ParentComponent,
    ChildComponent,
    RegDatat6Directive,
    EparentComponent,
    EchildComponent,
    SignupComponent,
    EmpFormComponent,
    ArraytestComponent,
    ConnectingUserComponent,
    EmpeditComponent,
    ProducteditComponent,
    EmpRecordComponent,
    EmpBasicComponent,
    EmpPersonalComponent,
    EmpExpComponent,
    EmpBasicEditComponent,
    EmpBankComponent,
    EmpAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
