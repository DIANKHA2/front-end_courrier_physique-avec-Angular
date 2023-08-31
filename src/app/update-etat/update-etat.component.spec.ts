import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateETATComponent } from './update-etat.component';

describe('UpdateETATComponent', () => {
  let component: UpdateETATComponent;
  let fixture: ComponentFixture<UpdateETATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateETATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateETATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
