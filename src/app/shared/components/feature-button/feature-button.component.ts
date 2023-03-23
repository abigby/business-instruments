import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, AfterContentInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature-button',
  templateUrl: './feature-button.component.html',
  styleUrls: ['./feature-button.component.scss']
})
export class FeatureButtonComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input()
  public featureId!: number;

  @Output()
  public onPackagePurchased: EventEmitter<boolean> = new EventEmitter<boolean>();
  public buttonText: string = 'Buy';
  public isPackagePurchased: boolean = false;
  public packageSubscription$:Subscription = new Subscription;

  constructor(
    private sharedService: SharedService
  ) {}

  public ngOnInit(): void { }

  public ngAfterContentInit(): void {
    this.packageSubscription$ = this.sharedService.packageCart.subscribe((packageItem) => {
      if(packageItem) {
        let featuredItem = packageItem.find((item) => {
          return item.id == this.featureId;
        });

        if(featuredItem && featuredItem.isPurchased) {
          this.isPackagePurchased = true;
          this.buttonText = 'Cancel';
        } else {
          this.isPackagePurchased = false;
          this.buttonText = 'Buy';
          return;
        }
      }
    });
  }

  public onButtonClick(): void {
    if(this.buttonText.toLowerCase() == 'buy') {
      this.buttonText = 'Cancel';
    } else {
      this.buttonText = 'Buy';
    }

    this.onPackagePurchased.emit(!this.isPackagePurchased);
  }


  public ngOnDestroy(): void {
    this.packageSubscription$.unsubscribe();
  }
}
