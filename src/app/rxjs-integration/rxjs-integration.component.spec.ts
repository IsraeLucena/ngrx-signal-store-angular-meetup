import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIntegrationComponent } from './rxjs-integration.component';

describe('RxjsIntegrationComponent', () => {
  let component: RxjsIntegrationComponent;
  let fixture: ComponentFixture<RxjsIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
