import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorrespondantComponent } from './update-correspondant.component';

describe('UpdateCorrespondantComponent', () => {
  let component: UpdateCorrespondantComponent;
  let fixture: ComponentFixture<UpdateCorrespondantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCorrespondantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCorrespondantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
