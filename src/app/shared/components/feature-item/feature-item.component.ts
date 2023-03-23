import { Component, Input, OnInit, AfterContentChecked } from '@angular/core';
import { Package } from '../../../models/package.model';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit, AfterContentChecked {

  @Input()
  public feature!: Package;

  public isSelected: boolean = false;
  public hasPremiumPackage: boolean = false;

  constructor(
    private SharedService: SharedService
  ) { }

  public ngOnInit(): void { }

  public ngAfterContentChecked(): void { }

  public onPackageSelected(evt:any): void {
    this.feature.isPurchased = evt;
    if(this.feature && this.feature.id) {
      this.SharedService.selectPackage(this.feature.id!, evt);
    }
  }
}
