import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalStoreFeatureComponent } from './signal-store-feature.component';

describe('SignalStoreFeatureComponent', () => {
  let component: SignalStoreFeatureComponent;
  let fixture: ComponentFixture<SignalStoreFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalStoreFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalStoreFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
