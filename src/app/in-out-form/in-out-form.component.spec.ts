import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutFormComponent } from './in-out-form.component';

describe('InOutFormComponent', () => {
  let component: InOutFormComponent;
  let fixture: ComponentFixture<InOutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
