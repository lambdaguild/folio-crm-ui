
import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatOptionModule } from '@angular/material/core';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';




@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatDatepickerModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTabsModule,
      MatTableModule
    ],
    exports: [
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatDatepickerModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatProgressSpinnerModule,
      MatMenuModule,
      MatTabsModule,
      MatTableModule
    ],
  })
  export class MaterialModule {}