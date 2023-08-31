import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcorrespondantComponent } from './listcorrespondant.component';

describe('ListcorrespondantComponent', () => {
  let component: ListcorrespondantComponent;
  let fixture: ComponentFixture<ListcorrespondantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcorrespondantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcorrespondantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
