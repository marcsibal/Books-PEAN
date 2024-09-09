import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatNativeDateModule,
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AgmCoreModule } from '@agm/core';
import { TextMaskModule } from 'angular2-text-mask';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, NgxNativeDateModule, } from 'ngx-mat-datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { BooksComponent } from './list/books.component';
import { BooksService } from './books.service';
import { DateDialog } from './dialog/date-dialog/date-dialog.component';
import { EditDialog } from './dialog/edit-entry/edit-entry.component';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';


const routes: Routes = [
  {
    path: 'list',
    component: BooksComponent,
  }
 
];


@NgModule({
  declarations: [
   BooksComponent,
   DateDialog,
   EditDialog,
   ConfirmationDialogComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    NgxMatSelectSearchModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    NgxChartsModule,
    NgxMatDatetimePickerModule,
    NgxNativeDateModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
    }),
    TextMaskModule,

    FuseSharedModule,
    FuseWidgetModule,

    

  ],
  providers: [
    BooksService,
    DatePipe,
   

  ],
  entryComponents: [
    DateDialog,
    EditDialog,
    ConfirmationDialogComponent

  ]
})
export class BooksModule {
}


