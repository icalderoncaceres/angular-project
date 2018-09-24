import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../routing/routing.module';
import { FormsModule } from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule
  ]
})
export class SharedModule { }
