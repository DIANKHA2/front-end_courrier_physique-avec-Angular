import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCopieScaneeComponent } from './add-copie-scanee.component';

describe('AddCopieScaneeComponent', () => {
  let component: AddCopieScaneeComponent;
  let fixture: ComponentFixture<AddCopieScaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCopieScaneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCopieScaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
