import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { FeatureButtonComponent } from './components/feature-button/feature-button.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    FeatureItemComponent,
    FeatureButtonComponent,
    LoaderComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
  ],
  exports: [
    FlexLayoutModule,
    CommonModule,
    FeatureItemComponent,
    LoaderComponent,
    FeatureButtonComponent
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
    };
  }
}
