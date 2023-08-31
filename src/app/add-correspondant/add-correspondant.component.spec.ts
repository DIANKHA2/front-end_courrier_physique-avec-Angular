import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorrespondantComponent } from './add-correspondant.component';

describe('AddCorrespondantComponent', () => {
  let component: AddCorrespondantComponent;
  let fixture: ComponentFixture<AddCorrespondantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorrespondantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCorrespondantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
