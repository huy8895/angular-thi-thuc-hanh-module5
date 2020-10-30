import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookModule} from './modules/book.module';
import {ListBookComponent} from './modules/components/list-book/list-book.component';
import {AddBookComponent} from './modules/components/add-book/add-book.component';

const ROUTERS: Routes = [
  { path: '',   redirectTo: '/books', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTERS),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
