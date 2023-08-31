import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COURRIERComponent } from './courrier.component';

describe('COURRIERComponent', () => {
  let component: COURRIERComponent;
  let fixture: ComponentFixture<COURRIERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COURRIERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COURRIERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
