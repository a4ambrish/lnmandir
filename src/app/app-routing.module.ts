import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'book', loadChildren: './book/book.module#BookPageModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'member-list', loadChildren: './member-list/member-list.module#MemberListPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'poojari-ji', loadChildren: './poojari-ji/poojari-ji.module#PoojariJiPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
