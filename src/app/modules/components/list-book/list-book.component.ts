import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {IBook} from '../../../ibook';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDetailComponent} from '../dialog-detail/dialog-detail.component';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: IBook[];
  private text: string;
  dataSource: any;

  constructor(private bookService: BookService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      value => this.books = value
    );
  }

  openConfirmDeleteDialog(index, book: IBook): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.delete(result.id);
        this.books.splice(index, 1);
      }

    });
  }

  private delete(id: any): void {
    this.bookService.deleteBook(id).subscribe(() => this.text = 'delete success!');
  }

  showDetail(book: IBook): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }

    });
  }
}

