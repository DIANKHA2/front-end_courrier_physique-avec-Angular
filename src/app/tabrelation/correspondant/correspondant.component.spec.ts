import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondantComponent } from './correspondant.component';

describe('CorrespondantComponent', () => {
  let component: CorrespondantComponent;
  let fixture: ComponentFixture<CorrespondantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrespondantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
