import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCOURRIERComponent } from './update-courrier.component';

describe('UpdateCOURRIERComponent', () => {
  let component: UpdateCOURRIERComponent;
  let fixture: ComponentFixture<UpdateCOURRIERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCOURRIERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCOURRIERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
