import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCopieScaneeComponent } from './update-copie-scanee.component';

describe('UpdateCopieScaneeComponent', () => {
  let component: UpdateCopieScaneeComponent;
  let fixture: ComponentFixture<UpdateCopieScaneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCopieScaneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCopieScaneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
