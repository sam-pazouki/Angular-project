import { PostsService } from './posts/posts.service';
import { listComponent } from './posts/nav/list/list.component';
import { HeaderComponent } from './posts/nav/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule } from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navcomponent } from './posts/nav/nav.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, navcomponent, HeaderComponent, listComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
