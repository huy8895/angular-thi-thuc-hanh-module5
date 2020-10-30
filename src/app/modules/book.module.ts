import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListBookComponent} from './components/list-book/list-book.component';
import {RouterModule, Routes} from '@angular/router';
import {AddBookComponent} from './components/add-book/add-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {DialogDeleteComponent} from './components/dialog-delete/dialog-delete.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import {DialogDetailComponent} from './components/dialog-detail/dialog-detail.component';

const heroesRoutes: Routes = [
  { path: 'books',  component: ListBookComponent },
  { path: 'books/:id/edit', component: EditBookComponent },
  { path: 'books/add',  component: AddBookComponent },

];

@NgModule({
  declarations: [
    AddBookComponent,
    DialogDeleteComponent,
    DialogDetailComponent,
    EditBookComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild(heroesRoutes)
  ]
})
export class BookModule {
}
