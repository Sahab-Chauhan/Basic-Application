import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { Basic1Component } from './basic/basic1/basic1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  {path:'about-us',component:AboutUsComponent},
  {path:'basic',component:BasicComponent},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    Basic1Component,
    AboutUsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
