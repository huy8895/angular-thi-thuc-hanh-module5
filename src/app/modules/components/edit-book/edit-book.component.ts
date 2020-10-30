import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {IBook} from '../../../ibook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup;
  private id: number;
;

  constructor(private bookService: BookService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getBookById(this.id = +params.get('id')))
    ).subscribe(value => {
      console.log('this.id: ' + this.id);
      console.log('this.value: ' + JSON.stringify(value));
      this.editBookForm.patchValue(value);
    });

    this.editBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.bookService.updateBook(this.id, this.editBookForm.value).subscribe(
      (value => {
        console.log('add book success' + value);
        this.route.navigate(['/books']);
      })
    );
  }
}
