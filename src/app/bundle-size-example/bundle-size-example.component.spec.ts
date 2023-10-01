import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleSizeExampleComponent } from './bundle-size-example.component';

describe('BundleSizeExampleComponent', () => {
  let component: BundleSizeExampleComponent;
  let fixture: ComponentFixture<BundleSizeExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BundleSizeExampleComponent]
    });
    fixture = TestBed.createComponent(BundleSizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
