import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormeComponent } from './update-forme.component';

describe('UpdateFormeComponent', () => {
  let component: UpdateFormeComponent;
  let fixture: ComponentFixture<UpdateFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
