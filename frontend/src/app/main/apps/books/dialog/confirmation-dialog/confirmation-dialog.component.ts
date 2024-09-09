import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  title: string;
  message: string;
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    this.message = '';
    this.title   = '';
  }

  ngOnInit(): void { }
}
