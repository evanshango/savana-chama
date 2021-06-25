import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GroupComponent} from './components/group/group.component';
import {ShellComponent} from './shared/shell/shell.component';
import {UserComponent} from './components/user/user.component';
import {TextInputComponent} from './shared/text-input/text-input.component';
import {CardModule} from 'primeng/card';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { AddGroupComponent } from './components/group/add-group/add-group.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';

const UX_MODULES = [
  CardModule, ButtonModule, ToolbarModule, DynamicDialogModule, InputTextModule, InputTextareaModule, EditorModule
];

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SidebarComponent, DashboardComponent, GroupComponent, ShellComponent, UserComponent, TextInputComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AppRoutingModule, ...UX_MODULES,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
