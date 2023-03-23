import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTwoComponent } from './package-two.component';

describe('PackageTwoComponent', () => {
  let component: PackageTwoComponent;
  let fixture: ComponentFixture<PackageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
