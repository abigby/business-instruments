import {HttpClientModule} from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PackageOneComponent } from './components/package-one/package-one.component';
import { PackageTwoComponent } from './components/package-two/package-two.component';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './services/shared.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PackageOneComponent,
    PackageTwoComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    SharedModule.forRoot()
  ],
  providers: [ToastrService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
