import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {routes} from './app.routing';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { FindaplanComponent } from './findaplan/findaplan.component';
import { ContactComponent } from './contact/contact.component';
import { MealplansComponent } from './mealplans/mealplans.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopbannerComponent,
    HowitworksComponent,
    FindaplanComponent,
    ContactComponent,
    MealplansComponent,
    AboutComponent,


  ],
  imports: [
    routes,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
