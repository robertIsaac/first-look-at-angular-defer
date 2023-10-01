import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestExampleComponent } from './http-request-example.component';

describe('HttpRequestExampleComponent', () => {
  let component: HttpRequestExampleComponent;
  let fixture: ComponentFixture<HttpRequestExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpRequestExampleComponent]
    });
    fixture = TestBed.createComponent(HttpRequestExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
