import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'member/:id', component: MemberDetailComponent },
  { path: '**', redirectTo: '' }
];