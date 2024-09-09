import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
    
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FuseSharedModule
  ]
})
export class AppsModule { }
