import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCOURRIERComponent } from './add-courrier.component';

describe('AddCOURRIERComponent', () => {
  let component: AddCOURRIERComponent;
  let fixture: ComponentFixture<AddCOURRIERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCOURRIERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCOURRIERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
