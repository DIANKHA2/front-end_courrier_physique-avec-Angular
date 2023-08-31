import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureCourrierComponent } from './nature-courrier.component';

describe('NatureCourrierComponent', () => {
  let component: NatureCourrierComponent;
  let fixture: ComponentFixture<NatureCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatureCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
