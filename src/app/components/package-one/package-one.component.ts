import { Component, OnInit } from '@angular/core';
import { delay, map, catchError, of } from 'rxjs';
import { Package } from '../../models/package.model';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs/internal/Observable';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-package-one',
  templateUrl: './package-one.component.html',
  styleUrls: ['./package-one.component.scss']
})
export class PackageOneComponent implements OnInit {

  public isLoading: boolean = true;
  public pageOneFeatures: Array<Package> = new Array<Package>();
  public packageSubscription$: Observable<Array<Package>> = new Observable<Array<Package>>;

  constructor(
    private sharedService: SharedService,
    private toastrService: ToastrService
  ) { }

  public ngOnInit(): void {
    this.packageSubscription$ = this.sharedService.packageCart
    .pipe(
      map((data)=> data.filter((data) => {
        return data.package == 'one';
      })),
      catchError((err) => {
        this.toastrService.error(`Error in Package Subscription ${err}`);
        return of(err);
      }),
      delay(800),
    );
  }
}
