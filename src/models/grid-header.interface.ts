export interface GridHeader {
  headerName: string;
  field: 'name' | 'author' | 'publicationDate' | 'genre' | 'ISBN' | 'pages';
  flex: number;
  minWidth: number;
  resizable: boolean;
  sortable: boolean;
  unSortIcon: boolean;
  filter: boolean;
  suppressMenu?: boolean;
  pinned?: 'left' | 'right';
  lockPinned?: boolean;
}
