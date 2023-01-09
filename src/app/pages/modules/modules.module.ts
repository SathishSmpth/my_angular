import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    TableComponent,
    CardsComponent
  ],
  exports:[
    TableComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
