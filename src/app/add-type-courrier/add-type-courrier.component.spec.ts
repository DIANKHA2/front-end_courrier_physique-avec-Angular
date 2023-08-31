import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeCourrierComponent } from './add-type-courrier.component';

describe('AddTypeCourrierComponent', () => {
  let component: AddTypeCourrierComponent;
  let fixture: ComponentFixture<AddTypeCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
