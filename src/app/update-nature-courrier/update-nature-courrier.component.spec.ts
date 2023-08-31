import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNatureCourrierComponent } from './update-nature-courrier.component';

describe('UpdateNatureCourrierComponent', () => {
  let component: UpdateNatureCourrierComponent;
  let fixture: ComponentFixture<UpdateNatureCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNatureCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNatureCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
