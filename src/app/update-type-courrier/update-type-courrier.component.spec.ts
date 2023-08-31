import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeCourrierComponent } from './update-type-courrier.component';

describe('UpdateTypeCourrierComponent', () => {
  let component: UpdateTypeCourrierComponent;
  let fixture: ComponentFixture<UpdateTypeCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
