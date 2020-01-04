import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { headers } from '../assets/headers';
import { books } from '../assets/books';
import { GridHeader } from '../models/grid-header.interface';
import { Book } from '../models/book.interface';

@Injectable()
export class TableService {

  getHeaders(): Observable<GridHeader[]> {
    return of(headers);
  }

  getList(): Observable<Book[]> {
    return of(books);
  }
}





