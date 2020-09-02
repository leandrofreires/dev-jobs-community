import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
//Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule { }
