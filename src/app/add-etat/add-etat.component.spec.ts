import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddETATComponent } from './add-etat.component';

describe('AddETATComponent', () => {
  let component: AddETATComponent;
  let fixture: ComponentFixture<AddETATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddETATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddETATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
