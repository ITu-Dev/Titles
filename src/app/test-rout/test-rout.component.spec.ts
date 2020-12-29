import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutComponent } from './test-rout.component';

describe('TestRoutComponent', () => {
  let component: TestRoutComponent;
  let fixture: ComponentFixture<TestRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
