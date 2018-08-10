// Import File for Material Modules used throughout the site.
import {NgModule} from '@angular/core';

import {MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
})

export class MaterialModule {

}
