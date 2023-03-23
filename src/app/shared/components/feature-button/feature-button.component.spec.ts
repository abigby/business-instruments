import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FeatureButtonComponent } from './feature-button.component';

describe('FeatureButtonComponent', () => {
  let component: FeatureButtonComponent;
  let fixture: ComponentFixture<FeatureButtonComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the onButtonClick method`, async(() => {
    fixture.detectChanges();
    spyOn(component, `onButtonClick`);
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.isPackagePurchased).toBeFalsy();
  }))
});
