import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './components/add-book/add-book.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AddBookComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
