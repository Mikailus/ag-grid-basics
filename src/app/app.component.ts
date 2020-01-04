import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TableService } from './table.service';
import { Book } from '../models/book.interface';
import { GridHeader } from '../models/grid-header.interface';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      class="ag-theme-balham grid"
      [rowData]="rows$ | async"
      [columnDefs]="headers$ | async"
      [gridOptions]="gridOptions"
      [animateRows]="true">
    </ag-grid-angular>
  `,
  styles: [`
    .grid {
      width: 1800px;
      height: 300px;
    }
  `],
  providers: [TableService]
})
export class AppComponent implements OnInit {
  headers$: Observable<GridHeader[]>;
  rows$: Observable<Book[]>;

  gridOptions = {
    suppressMenuHide: true
  };

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.headers$ = this.tableService.getHeaders();

    this.rows$ = this.tableService.getList();
  }
}
