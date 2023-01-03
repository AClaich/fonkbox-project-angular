import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MobileContainerComponent } from './mobile-container/mobile-container.component';
import { WebContainerComponent } from './web-container/web-container.component';
import { LayoutComponent } from './layout/layout.component';
import { LastShowComponent } from './last-show/last-show.component';
import { ShowResumeComponent } from './show-resume/show-resume.component';
import { TeamComponent } from './team/team.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    MobileContainerComponent,
    WebContainerComponent,
    LayoutComponent,
    LastShowComponent,
    ShowResumeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
