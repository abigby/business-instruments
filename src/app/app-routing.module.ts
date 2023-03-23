import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageOneComponent } from './components/package-one/package-one.component';
import { PackageTwoComponent } from './components/package-two/package-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'package-one', pathMatch: 'full' },
  { path: 'package-one', component: PackageOneComponent },
  { path: 'package-two', component: PackageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
