import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ListBookComponent} from '../list-book/list-book.component';
import {IBook} from '../../../ibook';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListBookComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IBook) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
