import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Package } from '../models/package.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private packageList: Array<Package> = [
    {
      "id": 1,
      "package":"one",
      "title": "Starter",
      "price": 1,
      "description": "Starter features for your business to grow.",
      "wrapperColor": "#979797",
      "isPurchased": false
    },
    {
      "id": 2,
      "package":"one",
      "title": "Regular",
      "price": 25,
      "description": "Regular features for your business to grow.",
      "wrapperColor": "#3B86FF",
      "isPurchased": false
    },
    {
      "id": 3,
      "package":"two",
      "title": "Professional",
      "price": 75,
      "description": "Professional features for your business to grow.",
      "wrapperColor": "#6600FF",
      "isPurchased": false
    },
    {
      "id": 4,
      "package":"two",
      "title": "Ultimate",
      "price": 115,
      "description": "The Ultimate set of features for your business to grow.",
      "wrapperColor": "#EE3541",
      "isPurchased": false
    }
  ];

  public packageCart: BehaviorSubject<Array<Package>> = new BehaviorSubject<Array<Package>>(this.packageList);
  public hasPremiumPackage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getAllPackages(): Observable<Array<Package>> {
    return this.packageCart;
  }

  public selectPackage(packageId:number, isSelected:boolean): void {
    let selectedItemIndex = this.packageList.findIndex((item)=> {
      return item.id == packageId;
    });

    if(!selectedItemIndex) return;

    this.packageList[selectedItemIndex].isPurchased = isSelected;
    this.checkForPackageTwoPurchases();
  }

  private checkForPackageTwoPurchases(): void {
    let premiumPackages = this.packageList.filter((pack)=> {
      return (pack.package == 'two' && pack.isPurchased == true);
    });

    if(premiumPackages.length) {
      this.packageList.map((item) => {
        if(item.package == 'one') {
          item.isPurchased = true;
        }

        return item;
      });
    }

    this.packageCart.next(this.packageList);
  }
}
