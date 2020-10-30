import {Component, OnInit} from '@angular/core';
import {IBook} from '../../../ibook';
import {BookService} from '../../services/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private bookService: BookService,
              private route: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.newBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.bookService.addBook(this.newBookForm.value).subscribe(
      value => {
        console.log('add book success' + value);
        this.route.navigate(['/books']);


      }
    );
  }
}
