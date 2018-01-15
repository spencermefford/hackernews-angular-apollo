import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GraphQLModule } from './apollo.config';
import { CreateLinkComponent } from './create-link/create-link.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CreateLinkComponent,
    LinkItemComponent,
    LinkListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    GraphQLModule, // connection
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
