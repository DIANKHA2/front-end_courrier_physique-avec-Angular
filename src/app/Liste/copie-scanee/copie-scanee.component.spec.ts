import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieScaneeComponent } from './copie-scanee.component';

describe('CopieScaneeComponent', () => {
  let component: CopieScaneeComponent;
  let fixture: ComponentFixture<CopieScaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopieScaneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopieScaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
