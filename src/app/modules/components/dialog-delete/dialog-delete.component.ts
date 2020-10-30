import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ListBookComponent} from '../list-book/list-book.component';
import {IBook} from '../../../ibook';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListBookComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IBook) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
