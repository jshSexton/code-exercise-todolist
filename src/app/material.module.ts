// Import File for Material Modules used throughout the site.
import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
})

export class MaterialModule {

}
