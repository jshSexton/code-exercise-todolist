// Import File for Material Modules used throughout the site.
import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
  ],
})

export class MaterialModule {

}
