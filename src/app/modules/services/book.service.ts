import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../../ibook';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(API_URL);
  }

  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(API_URL + id);
  }

  updateBook(id: number, updatedBook: IBook): Observable<IBook> {
    return this.http.put<IBook>(API_URL + id, updatedBook);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(API_URL + id);
  }

  addBook(value: IBook): Observable<IBook> {
    return this.http.post<IBook>(API_URL, value);
  }
}
