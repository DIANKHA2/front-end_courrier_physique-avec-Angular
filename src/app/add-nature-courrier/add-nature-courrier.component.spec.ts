import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNatureCourrierComponent } from './add-nature-courrier.component';

describe('AddNatureCourrierComponent', () => {
  let component: AddNatureCourrierComponent;
  let fixture: ComponentFixture<AddNatureCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNatureCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNatureCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
