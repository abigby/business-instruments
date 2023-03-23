import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Package } from 'src/app/models/package.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-package-two',
  templateUrl: './package-two.component.html',
  styleUrls: ['./package-two.component.scss']
})
export class PackageTwoComponent {
  public isLoading: boolean = true;
  public pageTwoFeatures: Array<Package> = new Array<Package>();
  public packageSubscription$: Observable<Array<Package>> = new Observable<Array<Package>>;

  constructor(
    private sharedService: SharedService,
    private toastrService: ToastrService
  ) { }

  public ngOnInit(): void {
    this.packageSubscription$ = this.sharedService.packageCart
    .pipe(
      map((data)=> data.filter((data) => {
        return data.package == 'two';
      })),
      catchError((err) => {
        this.toastrService.error(`Error in Package Subscription ${err}`);
        return of(err);
      }),
      delay(800),
    );
   }
}
