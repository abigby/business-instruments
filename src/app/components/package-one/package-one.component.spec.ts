import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/services/shared.service';

import { PackageOneComponent } from './package-one.component';

describe('PackageOneComponent', () => {
  let component: PackageOneComponent;
  let fixture: ComponentFixture<PackageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageOneComponent ],
      providers: [
        { provide: SharedService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
